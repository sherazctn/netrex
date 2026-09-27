"""Sharpen low-resolution portfolio screenshots with Real-ESRGAN (x4plus, ncnn on CPU).

Used by .github/workflows/portfolio-upscale.yml. For each source image in scripts/upscale-list.json
(sharded with SHARD / SHARDS env vars) it writes:
  public/portfolio/sr/<name>.webp       900px wide  (cards, service pages)
  public/portfolio/sr/<name>-full.webp  1440px wide (lightbox)
Only the resolution changes; the screenshots are not redrawn or edited.
"""
import json, os, sys
import numpy as np, ncnn
from PIL import Image

MODELS = os.environ.get("MODELS", "models/")
SHARD, SHARDS = int(os.environ.get("SHARD", 0)), int(os.environ.get("SHARDS", 1))
OUT = "public/portfolio/sr/"
MAX_H = 1920 * 4

def load():
    net = ncnn.Net()
    net.opt.use_vulkan_compute = False
    net.opt.num_threads = os.cpu_count() or 2
    net.load_param(MODELS + "realesrgan-x4plus.param")
    net.load_model(MODELS + "realesrgan-x4plus.bin")
    return net

def upscale(net, img, scale=4, tile=160, pad=12):
    a = np.asarray(img.convert("RGB"), dtype=np.float32) / 255.0
    H, W, _ = a.shape
    out = np.zeros((H * scale, W * scale, 3), np.float32)
    for y in range(0, H, tile):
        for x in range(0, W, tile):
            y0, x0 = max(0, y - pad), max(0, x - pad)
            y1, x1 = min(H, y + tile + pad), min(W, x + tile + pad)
            t = np.ascontiguousarray(a[y0:y1, x0:x1].transpose(2, 0, 1))
            ex = net.create_extractor()
            ex.input("data", ncnn.Mat(t))
            _, o = ex.extract("output")
            o = np.array(o).transpose(1, 2, 0)
            ty, tx = (y - y0) * scale, (x - x0) * scale
            th, tw = (min(H, y + tile) - y) * scale, (min(W, x + tile) - x) * scale
            out[y * scale:y * scale + th, x * scale:x * scale + tw] = o[ty:ty + th, tx:tx + tw]
    return Image.fromarray((np.clip(out, 0, 1) * 255 + 0.5).astype(np.uint8))

files = json.load(open("scripts/upscale-list.json"))[SHARD::SHARDS]
os.makedirs(OUT, exist_ok=True)
net = load()
for f in files:
    name = os.path.splitext(os.path.basename(f))[0]
    src = Image.open(f)
    if src.mode in ("RGBA", "P", "LA"):
        bg = Image.new("RGB", src.size, "white")
        bg.paste(src.convert("RGBA"), mask=src.convert("RGBA").split()[-1])
        src = bg
    big = upscale(net, src)
    for width, suffix, q in ((1440, "-full", 82), (900, "", 80)):
        h = round(big.height * width / big.width)
        big.resize((width, h), Image.LANCZOS).save(f"{OUT}{name}{suffix}.webp", quality=q, method=6)
    print("ok", name, src.size, "->", big.size, flush=True)
