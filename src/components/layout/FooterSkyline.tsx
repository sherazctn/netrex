export function FooterSkyline() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20 pointer-events-none">
      <svg
        viewBox="0 0 1600 220"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
        fill="#555555"
      >
        {/* ===== DUBAI - Burj Khalifa, Burj Al Arab, Emirates Towers ===== */}
        <g>
          {/* Burj Khalifa - tallest, with distinctive tapering spire */}
          <rect x="60" y="30" width="4" height="190" rx="1" />
          <rect x="55" y="40" width="14" height="180" rx="1" />
          <rect x="50" y="55" width="24" height="165" rx="1" />
          <rect x="46" y="75" width="32" height="145" rx="1" />
          <rect x="42" y="100" width="40" height="120" rx="2" />
          <rect x="38" y="130" width="48" height="90" rx="2" />
          {/* Spire tip */}
          <rect x="61" y="10" width="2" height="25" />
          
          {/* Burj Al Arab - Sail shape */}
          <path d="M130 220 L130 110 Q140 80 160 75 L160 100 Q155 105 150 110 L150 220Z" />
          <path d="M160 75 Q165 74 168 78 L168 220 L150 220 L150 110 Q155 105 160 100Z" fill="#555555" opacity="0.7" />
          
          {/* Emirates Towers - twin towers */}
          <rect x="185" y="80" width="12" height="140" rx="1" />
          <polygon points="188,80 191,65 194,68 197,80" />
          <rect x="205" y="100" width="10" height="120" rx="1" />
          <polygon points="207,100 210,88 213,92 215,100" />
          
          {/* Dubai Frame */}
          <rect x="232" y="90" width="5" height="130" />
          <rect x="257" y="90" width="5" height="130" />
          <rect x="232" y="90" width="30" height="8" />
        </g>

        {/* ===== NEW YORK - Empire State, Chrysler, One WTC, Statue hint ===== */}
        <g>
          {/* One World Trade Center - sharp angled top */}
          <polygon points="330,220 330,50 340,35 345,25 350,35 360,50 360,220" />
          <rect x="343" y="10" width="4" height="20" />
          
          {/* Empire State Building */}
          <rect x="380" y="65" width="28" height="155" rx="1" />
          <rect x="386" y="50" width="16" height="20" />
          <rect x="390" y="35" width="8" height="20" />
          <rect x="393" y="20" width="2" height="18" />
          
          {/* Chrysler Building - Art Deco crown */}
          <rect x="425" y="75" width="22" height="145" rx="1" />
          <polygon points="425,75 430,65 432,55 434,48 436,42 438,48 440,55 442,65 447,75" />
          <rect x="435" y="30" width="2" height="15" />
          {/* Crown arches */}
          <path d="M428,72 Q430,62 433,58" fill="none" stroke="#555555" strokeWidth="1.5" />
          <path d="M444,72 Q442,62 439,58" fill="none" stroke="#555555" strokeWidth="1.5" />
          
          {/* Freedom Tower-style buildings */}
          <rect x="465" y="110" width="14" height="110" rx="1" />
          <rect x="485" y="130" width="10" height="90" rx="1" />
        </g>

        {/* ===== LONDON - Big Ben, The Shard, Tower Bridge, The Gherkin ===== */}
        <g>
          {/* Big Ben / Elizabeth Tower */}
          <rect x="560" y="70" width="16" height="150" rx="1" />
          {/* Gothic top */}
          <polygon points="560,70 563,58 568,50 572,45 576,50 581,58 584,70" />
          {/* Clock face */}
          <circle cx="572" cy="85" r="6" fill="none" stroke="#555555" strokeWidth="2" />
          {/* Spire */}
          <rect x="571" y="32" width="2" height="16" />
          <polygon points="568,45 572,32 576,45" />
          
          {/* The Shard - Glass pyramid */}
          <polygon points="610,220 618,220 630,40 632,15 634,40 646,220 654,220" />
          
          {/* The Gherkin - Bullet shape */}
          <path d="M680 220 Q670 180 668 140 Q668 100 675 85 Q680 78 685 75 Q690 78 695 85 Q702 100 702 140 Q700 180 690 220Z" />
          
          {/* Tower Bridge hint */}
          <rect x="718" y="130" width="6" height="90" />
          <rect x="742" y="130" width="6" height="90" />
          <rect x="718" y="130" width="30" height="6" />
          <polygon points="718,130 721,118 724,130" />
          <polygon points="742,130 745,118 748,130" />
        </g>

        {/* ===== VANCOUVER - Harbour Centre, Vancouver House, Lions Gate hint ===== */}
        <g>
          {/* Harbour Centre with revolving observation deck */}
          <rect x="830" y="70" width="10" height="150" rx="1" />
          <ellipse cx="835" cy="68" rx="18" ry="7" />
          
          {/* Vancouver House - twisted triangle */}
          <path d="M875 220 L880 220 L890 120 L895 70 L900 65 L905 70 L910 120 L920 220 L925 220Z" />
          
          {/* Living Shangri-La style */}
          <rect x="945" y="55" width="12" height="165" rx="1" />
          <rect x="948" y="48" width="6" height="10" />
          
          {/* Canada Place sails */}
          <path d="M975 180 L980 140 L990 180Z" fill="#555555" opacity="0.6" />
          <path d="M990 180 L995 135 L1005 180Z" fill="#555555" opacity="0.6" />
          <path d="M1005 180 L1010 140 L1020 180Z" fill="#555555" opacity="0.6" />
          <rect x="972" y="180" width="52" height="40" rx="2" />
        </g>

        {/* ===== SYDNEY - Opera House, Sydney Tower, Harbour Bridge ===== */}
        <g>
          {/* Sydney Opera House - iconic shell shapes */}
          <path d="M1080 200 Q1085 160 1098 130 Q1105 120 1108 130 Q1115 160 1120 200Z" />
          <path d="M1115 200 Q1120 155 1138 115 Q1148 100 1155 115 Q1165 155 1170 200Z" />
          <path d="M1160 200 Q1163 170 1175 145 Q1180 138 1185 145 Q1192 170 1195 200Z" />
          {/* Base */}
          <rect x="1075" y="200" width="125" height="20" rx="2" />
          
          {/* Sydney Tower */}
          <rect x="1055" y="60" width="4" height="160" />
          <ellipse cx="1057" cy="58" rx="12" ry="6" />
          <rect x="1054" y="50" width="6" height="12" rx="1" />
          <rect x="1056" y="35" width="2" height="18" />
          
          {/* Harbour Bridge hint */}
          <path d="M1210 190 Q1230 140 1260 130 Q1290 140 1310 190" fill="none" stroke="#555555" strokeWidth="4" />
          <rect x="1215" y="190" width="4" height="30" />
          <rect x="1300" y="190" width="4" height="30" />
        </g>

        {/* ===== LAHORE - Minar-e-Pakistan, Badshahi Mosque ===== */}
        <g>
          {/* Minar-e-Pakistan - National monument */}
          <rect x="1370" y="60" width="10" height="160" rx="1" />
          <rect x="1365" y="180" width="20" height="40" rx="1" />
          {/* Crescent & Star on top */}
          <circle cx="1375" cy="52" r="5" fill="none" stroke="#555555" strokeWidth="1.5" />
          <polygon points="1375,46 1376,49 1379,49 1377,51 1378,54 1375,52 1372,54 1373,51 1371,49 1374,49" />
          {/* Wider base platform */}
          <rect x="1355" y="195" width="40" height="8" rx="2" />
          <rect x="1350" y="200" width="50" height="20" rx="2" />
          
          {/* Badshahi Mosque - Large central dome */}
          <path d="M1420 220 L1420 140 Q1420 110 1445 95 Q1470 110 1470 140 L1470 220Z" />
          {/* Side domes */}
          <path d="M1410 220 L1410 160 Q1410 145 1420 140 Q1425 145 1425 160 L1425 220Z" />
          <path d="M1465 220 L1465 160 Q1465 145 1475 140 Q1480 145 1480 160 L1480 220Z" />
          {/* Minarets */}
          <rect x="1398" y="100" width="5" height="120" />
          <polygon points="1398,100 1400,88 1403,100" />
          <rect x="1488" y="100" width="5" height="120" />
          <polygon points="1488,100 1490,88 1493,100" />
          {/* Crescent finials */}
          <circle cx="1400" cy="86" r="3" fill="none" stroke="#555555" strokeWidth="1" />
          <circle cx="1490" cy="86" r="3" fill="none" stroke="#555555" strokeWidth="1" />
        </g>

        {/* Ground line */}
        <rect x="0" y="218" width="1600" height="2" fill="#555555" opacity="0.5" />
      </svg>
    </div>
  );
}
