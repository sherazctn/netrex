import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FooterSkyline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={ref} className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none overflow-hidden">
      {/* Back layer */}
      <motion.div style={{ x: x2 }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.04]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          <rect x="20" y="140" width="30" height="100" rx="2" />
          <rect x="60" y="120" width="25" height="120" rx="2" />
          <rect x="200" y="100" width="35" height="140" rx="2" />
          <rect x="340" y="130" width="28" height="110" rx="2" />
          <rect x="520" y="110" width="32" height="130" rx="2" />
          <rect x="700" y="145" width="26" height="95" rx="2" />
          <rect x="870" y="125" width="30" height="115" rx="2" />
          <rect x="1050" y="135" width="28" height="105" rx="2" />
          <rect x="1200" y="115" width="34" height="125" rx="2" />
          <rect x="1380" y="140" width="30" height="100" rx="2" />
          <rect x="1550" y="120" width="25" height="120" rx="2" />
          <rect x="1680" y="130" width="30" height="110" rx="2" />
          <rect x="1750" y="150" width="25" height="90" rx="2" />
        </svg>
      </motion.div>

      {/* Main layer - real landmark silhouettes, subtly blended */}
      <motion.div style={{ x: x1 }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.06]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          
          {/* Burj Khalifa */}
          <rect x="80" y="20" width="3" height="220" rx="1" />
          <rect x="76" y="30" width="11" height="210" rx="1" />
          <rect x="72" y="50" width="19" height="190" rx="1" />
          <rect x="68" y="75" width="27" height="165" rx="2" />
          <rect x="64" y="105" width="35" height="135" rx="2" />
          <rect x="60" y="140" width="43" height="100" rx="2" />
          <rect x="80" y="5" width="3" height="20" />
          
          {/* Burj Al Arab */}
          <path d="M140 240 L140 120 Q150 85 170 78 L170 105 Q165 110 160 115 L160 240Z" />
          <path d="M170 78 Q175 76 178 80 L178 240 L160 240 L160 115 Q165 110 170 105Z" opacity="0.6" />
          
          {/* Dubai Frame */}
          <rect x="200" y="100" width="5" height="140" />
          <rect x="230" y="100" width="5" height="140" />
          <rect x="200" y="100" width="35" height="8" />
          
          {/* Cayan Tower */}
          <path d="M260 240 L265 120 L275 115 L285 120 L280 240Z" />

          {/* One WTC */}
          <polygon points="370,240 370,55 380,38 384,20 388,38 398,55 398,240" />
          <rect x="382" y="5" width="4" height="20" />
          
          {/* Empire State */}
          <rect x="420" y="70" width="28" height="170" rx="1" />
          <rect x="426" y="55" width="16" height="20" />
          <rect x="430" y="38" width="8" height="20" />
          <rect x="433" y="20" width="2" height="22" />
          
          {/* Chrysler Building */}
          <rect x="465" y="80" width="22" height="160" rx="1" />
          <polygon points="465,80 470,68 474,55 476,46 478,55 482,68 487,80" />
          <rect x="475" y="35" width="2" height="14" />

          {/* Big Ben */}
          <rect x="600" y="75" width="16" height="165" rx="1" />
          <polygon points="600,75 603,62 608,53 612,48 616,53 621,62 624,75" />
          <circle cx="612" cy="90" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="611" y="35" width="2" height="16" />
          <polygon points="608,48 612,35 616,48" />
          
          {/* The Shard */}
          <polygon points="650,240 657,240 668,45 670,18 672,45 683,240 690,240" />
          
          {/* The Gherkin */}
          <path d="M720 240 Q712 195 710 150 Q710 110 716 92 Q720 82 725 78 Q730 82 734 92 Q740 110 740 150 Q738 195 730 240Z" />
          
          {/* Tower Bridge */}
          <rect x="758" y="138" width="6" height="102" />
          <rect x="786" y="138" width="6" height="102" />
          <rect x="758" y="138" width="34" height="6" />
          <path d="M758 138 Q775 115 792 138" fill="none" stroke="currentColor" strokeWidth="2.5" />

          {/* Harbour Centre */}
          <rect x="880" y="75" width="10" height="165" rx="1" />
          <ellipse cx="885" cy="72" rx="18" ry="7" />
          
          {/* Vancouver House */}
          <path d="M920 240 L925 240 L935 130 L940 75 L945 70 L950 75 L955 130 L965 240 L970 240Z" />
          
          {/* Canada Place sails */}
          <path d="M990 190 L995 148 L1005 190Z" opacity="0.5" />
          <path d="M1005 190 L1010 143 L1020 190Z" opacity="0.5" />
          <path d="M1020 190 L1025 148 L1035 190Z" opacity="0.5" />
          <rect x="988" y="190" width="50" height="50" rx="2" />

          {/* Sydney Opera House */}
          <path d="M1160 210 Q1165 170 1178 140 Q1185 128 1188 140 Q1195 170 1200 210Z" />
          <path d="M1195 210 Q1200 162 1218 122 Q1228 108 1235 122 Q1245 162 1250 210Z" />
          <path d="M1240 210 Q1243 178 1255 152 Q1260 145 1265 152 Q1272 178 1275 210Z" />
          <rect x="1155" y="210" width="125" height="30" rx="2" />
          
          {/* Sydney Tower */}
          <rect x="1135" y="65" width="4" height="175" />
          <ellipse cx="1137" cy="62" rx="12" ry="6" />

          {/* Minar-e-Pakistan */}
          <rect x="1480" y="65" width="10" height="175" rx="1" />
          <rect x="1475" y="190" width="20" height="50" rx="1" />
          <rect x="1470" y="205" width="30" height="8" rx="2" />
          <rect x="1465" y="210" width="40" height="30" rx="2" />
          <circle cx="1485" cy="57" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Badshahi Mosque */}
          <path d="M1540 240 L1540 150 Q1540 118 1565 100 Q1590 118 1590 150 L1590 240Z" />
          <path d="M1528 240 L1528 170 Q1528 155 1540 148 Q1546 155 1546 170 L1546 240Z" />
          <path d="M1584 240 L1584 170 Q1584 155 1596 148 Q1602 155 1602 170 L1602 240Z" />
          <rect x="1518" y="108" width="4" height="132" />
          <polygon points="1518,108 1520,95 1522,108" />
          <rect x="1608" y="108" width="4" height="132" />
          <polygon points="1608,108 1610,95 1612,108" />

          {/* Ground line */}
          <rect x="0" y="238" width="1800" height="2" opacity="0.3" />
        </svg>
      </motion.div>
    </div>
  );
}
