import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface PortfolioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

export function PortfolioLightbox({ isOpen, onClose, image, title, description }: PortfolioLightboxProps) {
  const [scale, setScale] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const resetZoom = useCallback(() => {
    setScale(1);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setScale(1);
    } else {
      // Scroll to top when opening
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const zoomIn = () => setScale((s) => Math.min(s + 0.5, 5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.5, 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Top Bar */}
          <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-sm border-b border-white/10 z-[110]">
            <div className="flex gap-2">
              <button onClick={zoomIn} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <ZoomIn className="h-4 w-4" />
              </button>
              <button onClick={zoomOut} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <ZoomOut className="h-4 w-4" />
              </button>
              <button onClick={resetZoom} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <RotateCcw className="h-4 w-4" />
              </button>
              <span className="flex items-center text-white/60 text-sm ml-2">{Math.round(scale * 100)}%</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-500/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Image Area — like Behance */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-auto"
            style={{ cursor: scale > 1 ? "grab" : "default" }}
          >
            <div className="flex justify-center min-h-full" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
              <img
                src={image}
                alt={title}
                className="block select-none"
                style={{
                  width: `${Math.min(900 * scale, window.innerWidth)}px`,
                  height: "auto",
                  imageRendering: "auto",
                  transition: "width 0.3s ease-out",
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="flex-shrink-0 px-4 py-3 bg-black/60 backdrop-blur-sm border-t border-white/10 z-[110]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center max-w-lg mx-auto"
            >
              <h3 className="text-white font-display text-lg font-bold">{title}</h3>
              <p className="text-white/60 text-sm mt-1 line-clamp-2">{description}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
