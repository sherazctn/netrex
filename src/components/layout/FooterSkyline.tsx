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
      {/* Back layer - subtle background buildings */}
      <motion.div style={{ x: x2 }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.03]">
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
        </svg>
      </motion.div>

      {/* Main layer - iconic city landmarks */}
      <motion.div style={{ x: x1 }} className="absolute bottom-0 left-0 right-0 h-full opacity-[0.04]">
        <svg viewBox="0 0 1800 240" className="w-full h-full" preserveAspectRatio="xMidYMax slice" fill="currentColor">
          
          {/* Burj Khalifa - Dubai */}
          <rect x="80" y="20" width="3" height="220" rx="1" />
          <rect x="76" y="30" width="11" height="210" rx="1" />
          <rect x="72" y="50" width="19" height="190" rx="1" />
          <rect x="68" y="75" width="27" height="165" rx="2" />
          <rect x="64" y="105" width="35" height="135" rx="2" />
          <rect x="60" y="140" width="43" height="100" rx="2" />
          <rect x="80" y="5" width="3" height="20" />
          
          {/* Burj Al Arab - Dubai */}
          <path d="M140 240 L140 120 Q150 85 170 78 L170 105 Q165 110 160 115 L160 240Z" />
          <path d="M170 78 Q175 76 178 80 L178 240 L160 240 L160 115 Q165 110 170 105Z" opacity="0.5" />

          {/* Statue of Liberty - USA */}
          <rect x="300" y="170" width="30" height="70" rx="2" />
          <rect x="308" y="110" width="14" height="65" rx="1" />
          <rect x="312" y="90" width="6" height="25" />
          <circle cx="315" cy="85" r="5" />
          <path d="M310 85 L305 60 L308 62 L310 50 L312 62 L315 60Z" />
          <rect x="320" y="95" width="12" height="3" />

          {/* One WTC - USA */}
          <polygon points="370,240 370,55 380,38 384,20 388,38 398,55 398,240" />
          <rect x="382" y="5" width="4" height="20" />

          {/* Empire State - USA */}
          <rect x="420" y="70" width="28" height="170" rx="1" />
          <rect x="426" y="55" width="16" height="20" />
          <rect x="430" y="38" width="8" height="20" />
          <rect x="433" y="20" width="2" height="22" />

          {/* Big Ben - UK */}
          <rect x="560" y="75" width="16" height="165" rx="1" />
          <polygon points="560,75 563,62 568,53 572,48 576,53 581,62 584,75" />
          <circle cx="572" cy="90" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="571" y="35" width="2" height="16" />

          {/* The Shard - UK */}
          <polygon points="610,240 617,240 628,45 630,18 632,45 643,240 650,240" />
          
          {/* Tower Bridge - UK */}
          <rect x="670" y="148" width="6" height="92" />
          <rect x="698" y="148" width="6" height="92" />
          <rect x="670" y="148" width="34" height="6" />
          <path d="M670 148 Q687 125 704 148" fill="none" stroke="currentColor" strokeWidth="2" />

          {/* Brandenburg Gate - Germany */}
          <rect x="780" y="140" width="4" height="100" />
          <rect x="792" y="140" width="4" height="100" />
          <rect x="804" y="140" width="4" height="100" />
          <rect x="816" y="140" width="4" height="100" />
          <rect x="828" y="140" width="4" height="100" />
          <rect x="776" y="132" width="60" height="10" rx="1" />
          <polygon points="796,115 806,100 816,115" />
          <rect x="804" y="92" width="4" height="12" />

          {/* CN Tower style - Canada */}
          <rect x="910" y="55" width="6" height="185" />
          <ellipse cx="913" cy="95" rx="16" ry="8" />
          <rect x="912" y="30" width="2" height="30" />

          {/* Vancouver Lookout */}
          <rect x="950" y="100" width="8" height="140" />
          <ellipse cx="954" cy="98" rx="14" ry="5" />

          {/* Sydney Opera House - Australia */}
          <path d="M1060 210 Q1065 170 1078 140 Q1085 128 1088 140 Q1095 170 1100 210Z" />
          <path d="M1095 210 Q1100 162 1118 122 Q1128 108 1135 122 Q1145 162 1150 210Z" />
          <path d="M1140 210 Q1143 178 1155 152 Q1160 145 1165 152 Q1172 178 1175 210Z" />
          <rect x="1055" y="210" width="125" height="30" rx="2" />

          {/* Marina Bay Sands - Singapore */}
          <rect x="1260" y="120" width="14" height="120" rx="1" />
          <rect x="1286" y="120" width="14" height="120" rx="1" />
          <rect x="1312" y="120" width="14" height="120" rx="1" />
          <path d="M1255 120 Q1280 105 1300 108 Q1320 105 1330 120" fill="none" stroke="currentColor" strokeWidth="4" />
          <ellipse cx="1293" cy="112" rx="42" ry="4" />

          {/* Kingdom Centre - Saudi Arabia */}
          <rect x="1420" y="90" width="12" height="150" rx="1" />
          <rect x="1444" y="90" width="12" height="150" rx="1" />
          <path d="M1420 90 Q1438 55 1456 90" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="1416" y="150" width="48" height="6" />

          {/* Minar-e-Pakistan */}
          <rect x="1560" y="65" width="10" height="175" rx="1" />
          <rect x="1555" y="190" width="20" height="50" rx="1" />
          <rect x="1550" y="205" width="30" height="8" rx="2" />
          <rect x="1545" y="210" width="40" height="30" rx="2" />
          <circle cx="1565" cy="57" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Badshahi Mosque - Pakistan */}
          <path d="M1620 240 L1620 150 Q1620 118 1645 100 Q1670 118 1670 150 L1670 240Z" />
          <rect x="1608" y="108" width="3" height="132" />
          <polygon points="1608,108 1609.5,95 1611,108" />
          <rect x="1680" y="108" width="3" height="132" />
          <polygon points="1680,108 1681.5,95 1683,108" />

          {/* Ground line */}
          <rect x="0" y="238" width="1800" height="2" opacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
}
