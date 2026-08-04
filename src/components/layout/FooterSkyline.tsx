import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Realistic three-layer parallax city skyline used at the bottom of the footer.
 * Layer 1 (far): haze towers. Layer 2 (mid): iconic world landmarks NETREX operates near.
 * Layer 3 (near): dense low-rise blocks with lit windows for depth.
 */
export function FooterSkyline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xFar = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const xMid = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const xNear = useTransform(scrollYProgress, [0, 1], [0, -110]);

  return (
    <div ref={ref} className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none overflow-hidden">
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          {/* Lit window grids at three densities */}
          <pattern id="skyline-windows-lg" width="10" height="14" patternUnits="userSpaceOnUse">
            <rect x="2" y="3" width="4" height="6" fill="currentColor" opacity="0.55" />
          </pattern>
          <pattern id="skyline-windows-sm" width="7" height="9" patternUnits="userSpaceOnUse">
            <rect x="1.5" y="2" width="3" height="4" fill="currentColor" opacity="0.5" />
          </pattern>
          <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* ---------- FAR LAYER: hazy background towers ---------- */}
      <motion.div style={{ x: xFar }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.035]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          {[
            [20, 132, 34], [64, 108, 28], [110, 148, 30], [200, 92, 38], [250, 124, 26],
            [340, 122, 32], [400, 100, 26], [520, 102, 36], [580, 136, 28], [700, 138, 30],
            [760, 112, 26], [870, 118, 34], [930, 142, 28], [1050, 128, 30], [1110, 106, 26],
            [1200, 108, 38], [1265, 138, 28], [1380, 132, 32], [1440, 112, 26], [1550, 114, 30],
            [1610, 140, 26], [1680, 122, 34], [1740, 104, 28],
          ].map(([x, y, w], i) => (
            <g key={`far-${i}`}>
              <rect x={x} y={y} width={w} height={240 - y} rx="2" />
              <rect x={x + 3} y={y + 6} width={w - 6} height={240 - y - 12} fill="url(#skyline-windows-sm)" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* ---------- MID LAYER: iconic landmarks ---------- */}
      <motion.div style={{ x: xMid }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.05]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          {/* Burj Khalifa - Dubai (tiered spire with window bands) */}
          <rect x="80" y="18" width="3" height="222" rx="1" />
          <rect x="76" y="28" width="11" height="212" rx="1" />
          <rect x="72" y="48" width="19" height="192" rx="1" />
          <rect x="68" y="74" width="27" height="166" rx="2" />
          <rect x="64" y="104" width="35" height="136" rx="2" />
          <rect x="60" y="140" width="43" height="100" rx="2" />
          <rect x="64" y="112" width="35" height="120" fill="url(#skyline-windows-sm)" />
          <rect x="80" y="2" width="3" height="20" />

          {/* Burj Al Arab - Dubai (sail) */}
          <path d="M140 240 L140 120 Q150 85 170 78 L170 105 Q165 110 160 115 L160 240Z" />
          <path d="M170 78 Q175 76 178 80 L178 240 L160 240 L160 115 Q165 110 170 105Z" opacity="0.55" />
          <rect x="144" y="140" width="14" height="88" fill="url(#skyline-windows-sm)" />

          {/* Statue of Liberty - USA */}
          <rect x="298" y="168" width="34" height="72" rx="2" />
          <rect x="304" y="182" width="22" height="10" opacity="0.5" />
          <rect x="308" y="108" width="14" height="64" rx="1" />
          <rect x="312" y="88" width="6" height="24" />
          <circle cx="315" cy="83" r="5" />
          <path d="M310 83 L305 58 L308 60 L310 48 L312 60 L315 58Z" />
          <rect x="320" y="93" width="12" height="3" />

          {/* One World Trade Center - USA */}
          <polygon points="370,240 370,55 380,38 384,20 388,38 398,55 398,240" />
          <rect x="374" y="70" width="20" height="158" fill="url(#skyline-windows-sm)" />
          <rect x="382" y="4" width="4" height="20" />

          {/* Empire State - USA */}
          <rect x="420" y="70" width="28" height="170" rx="1" />
          <rect x="423" y="80" width="22" height="150" fill="url(#skyline-windows-sm)" />
          <rect x="426" y="54" width="16" height="20" />
          <rect x="430" y="37" width="8" height="20" />
          <rect x="433" y="18" width="2" height="22" />

          {/* Chrysler-style crown */}
          <rect x="480" y="118" width="22" height="122" rx="1" />
          <rect x="483" y="128" width="16" height="104" fill="url(#skyline-windows-sm)" />
          <polygon points="480,118 491,86 502,118" />
          <rect x="490" y="72" width="2" height="16" />

          {/* Big Ben - UK */}
          <rect x="560" y="74" width="16" height="166" rx="1" />
          <polygon points="560,74 563,61 568,52 572,46 576,52 581,61 584,74" />
          <circle cx="568" cy="90" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="563" y="112" width="10" height="112" fill="url(#skyline-windows-sm)" opacity="0.7" />
          <rect x="571" y="33" width="2" height="16" />

          {/* The Shard - UK */}
          <polygon points="610,240 617,240 628,45 630,18 632,45 643,240 650,240" />
          <rect x="620" y="110" width="20" height="120" fill="url(#skyline-windows-sm)" opacity="0.6" />

          {/* Tower Bridge - UK */}
          <rect x="670" y="146" width="7" height="94" />
          <rect x="698" y="146" width="7" height="94" />
          <rect x="670" y="146" width="35" height="6" />
          <polygon points="670,146 673.5,134 677,146" />
          <polygon points="698,146 701.5,134 705,146" />
          <path d="M670 152 Q687 128 705 152" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="660" y="196" width="56" height="4" />

          {/* Brandenburg Gate - Germany */}
          <rect x="780" y="140" width="4" height="100" />
          <rect x="792" y="140" width="4" height="100" />
          <rect x="804" y="140" width="4" height="100" />
          <rect x="816" y="140" width="4" height="100" />
          <rect x="828" y="140" width="4" height="100" />
          <rect x="776" y="130" width="60" height="11" rx="1" />
          <polygon points="796,113 806,98 816,113" />
          <rect x="804" y="90" width="4" height="12" />

          {/* CN Tower - Canada */}
          <rect x="910" y="52" width="7" height="188" />
          <ellipse cx="913" cy="94" rx="17" ry="8" />
          <ellipse cx="913" cy="112" rx="11" ry="5" opacity="0.6" />
          <rect x="912" y="26" width="2" height="30" />

          {/* Vancouver Lookout - Canada */}
          <rect x="950" y="100" width="9" height="140" />
          <ellipse cx="954" cy="98" rx="15" ry="5" />

          {/* Generic Toronto towers */}
          <rect x="985" y="130" width="24" height="110" rx="1" />
          <rect x="988" y="140" width="18" height="92" fill="url(#skyline-windows-sm)" />
          <rect x="1016" y="152" width="20" height="88" rx="1" />
          <rect x="1019" y="160" width="14" height="72" fill="url(#skyline-windows-sm)" />

          {/* Sydney Opera House - Australia */}
          <path d="M1060 210 Q1065 170 1078 140 Q1085 128 1088 140 Q1095 170 1100 210Z" />
          <path d="M1095 210 Q1100 162 1118 122 Q1128 108 1135 122 Q1145 162 1150 210Z" />
          <path d="M1140 210 Q1143 178 1155 152 Q1160 145 1165 152 Q1172 178 1175 210Z" />
          <rect x="1055" y="210" width="125" height="30" rx="2" />
          <rect x="1062" y="218" width="110" height="10" fill="url(#skyline-windows-sm)" opacity="0.5" />

          {/* Marina Bay Sands - Singapore */}
          <rect x="1260" y="118" width="15" height="122" rx="1" />
          <rect x="1286" y="118" width="15" height="122" rx="1" />
          <rect x="1312" y="118" width="15" height="122" rx="1" />
          <rect x="1262" y="130" width="11" height="98" fill="url(#skyline-windows-sm)" />
          <rect x="1288" y="130" width="11" height="98" fill="url(#skyline-windows-sm)" />
          <rect x="1314" y="130" width="11" height="98" fill="url(#skyline-windows-sm)" />
          <ellipse cx="1293" cy="112" rx="44" ry="5" />
          <rect x="1250" y="108" width="88" height="5" rx="2" opacity="0.7" />

          {/* Kingdom Centre - Saudi Arabia */}
          <rect x="1420" y="88" width="13" height="152" rx="1" />
          <rect x="1444" y="88" width="13" height="152" rx="1" />
          <path d="M1420 88 Q1438 52 1457 88" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="1416" y="150" width="48" height="6" />
          <rect x="1422" y="160" width="9" height="70" fill="url(#skyline-windows-sm)" />
          <rect x="1446" y="160" width="9" height="70" fill="url(#skyline-windows-sm)" />

          {/* Minar-e-Pakistan */}
          <rect x="1560" y="62" width="10" height="178" rx="1" />
          <rect x="1555" y="188" width="20" height="52" rx="1" />
          <rect x="1550" y="203" width="30" height="8" rx="2" />
          <rect x="1545" y="209" width="40" height="31" rx="2" />
          <circle cx="1565" cy="54" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />

          {/* Badshahi Mosque - Pakistan */}
          <path d="M1620 240 L1620 150 Q1620 116 1645 98 Q1670 116 1670 150 L1670 240Z" />
          <rect x="1632" y="176" width="26" height="64" opacity="0.5" />
          <rect x="1608" y="106" width="4" height="134" />
          <polygon points="1607,106 1610,92 1613,106" />
          <rect x="1680" y="106" width="4" height="134" />
          <polygon points="1679,106 1682,92 1685,106" />

          {/* Ground line */}
          <rect x="0" y="238" width="1800" height="2" opacity="0.25" />
        </svg>
      </motion.div>

      {/* ---------- NEAR LAYER: dense foreground blocks ---------- */}
      <motion.div style={{ x: xNear }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.07]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          {[
            [0, 192, 90], [96, 204, 70], [172, 186, 64], [242, 210, 96], [344, 196, 78],
            [428, 208, 84], [518, 190, 70], [594, 206, 92], [692, 198, 66], [764, 212, 88],
            [858, 194, 74], [938, 208, 96], [1040, 200, 68], [1114, 190, 86], [1206, 210, 78],
            [1290, 196, 70], [1366, 206, 92], [1464, 192, 66], [1536, 210, 84], [1626, 198, 76],
            [1708, 206, 92],
          ].map(([x, y, w], i) => (
            <g key={`near-${i}`}>
              <rect x={x} y={y} width={w} height={240 - y} rx="2" />
              <rect x={x + 5} y={y + 6} width={w - 10} height={240 - y - 10} fill="url(#skyline-windows-lg)" />
              {i % 3 === 0 && <rect x={x + w / 2 - 1} y={y - 12} width="2" height="12" />}
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
