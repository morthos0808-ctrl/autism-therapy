(() => {
  "use strict";

  const makeFace = (features) => `
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="82" fill="#eff7dc" />
      <circle cx="100" cy="100" r="74" fill="#fffdf8" stroke="#343526" stroke-width="4" />
      <g fill="none" stroke="#343526" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        ${features}
      </g>
    </svg>
  `;

  const EMOTIONS = [
    {
      id: "happy",
      label: "开心",
      face: makeFace(`
        <path d="M58 92 Q73 78 88 92" />
        <path d="M112 92 Q127 78 142 92" />
        <path d="M70 124 Q100 148 130 124" />
        <ellipse cx="54" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
        <ellipse cx="146" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
      `),
    },
    {
      id: "sad",
      label: "难过",
      face: makeFace(`
        <path d="M58 76 Q72 66 85 74" />
        <path d="M142 76 Q128 66 115 74" />
        <circle cx="73" cy="96" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="96" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="72" cy="99" r="2.5" fill="#343526" stroke="none" />
        <circle cx="126" cy="99" r="2.5" fill="#343526" stroke="none" />
        <path d="M74 138 Q100 122 126 138" />
        <path d="M66 107 C62 115 62 121 66 123 C70 121 70 115 66 107 Z" fill="#7FB7E8" stroke="none" />
      `),
    },
    {
      id: "angry",
      label: "生气",
      face: makeFace(`
        <path d="M56 70 L86 84" />
        <path d="M144 70 L114 84" />
        <circle cx="73" cy="98" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="98" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="77" cy="100" r="2.5" fill="#343526" stroke="none" />
        <circle cx="123" cy="100" r="2.5" fill="#343526" stroke="none" />
        <rect x="74" y="122" width="52" height="16" rx="4" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <path d="M87 122 V138 M100 122 V138 M113 122 V138" fill="none" stroke="#343526" stroke-width="2" />
        <path d="M140 38 V54 M132 46 H148 M135 41 L145 51 M145 41 L135 51" fill="none" stroke="#E85D5D" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "nervous",
      label: "紧张",
      face: makeFace(`
        <path d="M59 74 Q72 66 85 72" />
        <path d="M141 74 Q128 66 115 72" />
        <circle cx="73" cy="94" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="94" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="94" r="2.5" fill="#343526" stroke="none" />
        <path d="M78 132 q5 -7 11 0 t11 0 t11 0" />
        <path d="M44 78 C40 86 40 92 44 94 C48 92 48 86 44 78 Z" fill="#7FB7E8" stroke="none" />
        <path d="M156 74 C152 82 152 88 156 90 C160 88 160 82 156 74 Z" fill="#7FB7E8" stroke="none" />
      `),
    },
    {
      id: "excited",
      label: "兴奋的",
      face: makeFace(`
        <path d="M73 82 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#343526" stroke="none" />
        <path d="M127 82 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#343526" stroke="none" />
        <path d="M60 116 Q100 162 140 116 Q100 138 60 116 Z" fill="#343526" stroke="none" />
        <path d="M76 124 Q100 118 124 124" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round" />
        <ellipse cx="100" cy="146" rx="10" ry="5" fill="#E88A8A" stroke="none" />
        <ellipse cx="54" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
        <ellipse cx="146" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
        <path d="M38 84 L24 76 M38 100 L20 100 M38 116 L24 124" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M162 84 L176 76 M162 100 L180 100 M162 116 L176 124" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M146 52 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" fill="#F2D77C" stroke="none" />
      `),
    },
    {
      id: "hopeful",
      label: "满怀希望的",
      face: makeFace(`
        <path d="M60 78 Q72 72 84 78" />
        <path d="M140 78 Q128 72 116 78" />
        <circle cx="73" cy="94" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="90" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="90" r="2.5" fill="#343526" stroke="none" />
        <path d="M74 126 Q100 140 126 126" />
        <path d="M60 44 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 Z" fill="#F2D77C" stroke="none" />
        <path d="M148 62 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z" fill="#F2D77C" stroke="none" />
      `),
    },
    {
      id: "calm",
      label: "平静的",
      face: makeFace(`
        <path d="M62 78 H86" />
        <path d="M114 78 H138" />
        <path d="M60 94 Q73 104 86 94" />
        <path d="M114 94 Q127 104 140 94" />
        <path d="M80 128 Q100 138 120 128" />
        <path d="M54 152 q6 -5 12 0 t12 0" fill="none" stroke="#7FB7E8" stroke-width="3" stroke-linecap="round" />
        <path d="M60 160 q6 -5 12 0 t12 0" fill="none" stroke="#7FB7E8" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "proud",
      label: "自豪的",
      face: makeFace(`
        <path d="M114 64 Q128 56 142 66" />
        <path d="M58 74 Q71 70 84 74" />
        <circle cx="73" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="91" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="91" r="2.5" fill="#343526" stroke="none" />
        <path d="M60 104 Q73 110 86 104" />
        <path d="M114 104 Q127 110 140 104" />
        <path d="M72 126 Q102 142 132 118" />
        <path d="M150 126 l-9 22 9 -5 9 5 Z" fill="#E85D5D" stroke="none" />
        <circle cx="150" cy="138" r="10" fill="#F2D77C" stroke="#343526" stroke-width="3" />
        <path d="M150 131 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#343526" stroke="none" />
      `),
    },
    {
      id: "satisfied",
      label: "满足的",
      face: makeFace(`
        <path d="M60 78 Q72 74 84 78" />
        <path d="M140 78 Q128 74 116 78" />
        <path d="M60 96 Q73 86 86 96" />
        <path d="M114 96 Q127 86 140 96" />
        <path d="M74 126 Q100 146 126 126 Z" fill="#343526" stroke="none" />
        <path d="M84 126 Q100 122 116 126" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round" />
        <ellipse cx="54" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
        <ellipse cx="146" cy="120" rx="11" ry="7" fill="#E4BFA6" stroke="none" opacity="0.65" />
        <path d="M140 58 h20 v12 a8 8 0 0 1 -8 8 h-4 a8 8 0 0 1 -8 -8 Z" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <path d="M160 62 q10 0 10 6 q0 6 -10 6" fill="none" stroke="#343526" stroke-width="3" />
        <path d="M136 80 H164" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
        <path d="M144 52 q-3 -5 0 -9 M152 52 q-3 -5 0 -9" fill="none" stroke="#343526" stroke-width="2.5" stroke-linecap="round" />
      `),
    },
    {
      id: "grateful",
      label: "感激的",
      face: makeFace(`
        <path d="M60 76 Q72 70 84 76" />
        <path d="M140 76 Q128 70 116 76" />
        <circle cx="73" cy="94" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="94" r="3" fill="#343526" stroke="none" />
        <circle cx="127" cy="94" r="3" fill="#343526" stroke="none" />
        <circle cx="76" cy="91" r="1.2" fill="#fffdf8" stroke="none" />
        <circle cx="130" cy="91" r="1.2" fill="#fffdf8" stroke="none" />
        <path d="M74 126 Q100 144 126 126" />
        <path d="M66 107 C62 113 62 118 66 120 C70 118 70 113 66 107 Z" fill="#7FB7E8" stroke="none" />
        <path d="M44 78 C44 72 52 70 54 75 C58 70 66 72 66 78 C66 86 54 92 54 92 C54 92 44 86 44 78 Z" fill="#E85D5D" stroke="none" />
        <path d="M146 84 C146 79 152 77 154 81 C157 77 164 79 164 84 C164 90 154 96 154 96 C154 96 146 90 146 84 Z" fill="#E85D5D" stroke="none" />
        <ellipse cx="54" cy="116" rx="10" ry="6" fill="#E4BFA6" stroke="none" opacity="0.55" />
        <ellipse cx="146" cy="116" rx="10" ry="6" fill="#E4BFA6" stroke="none" opacity="0.55" />
      `),
    },
    {
      id: "surprised",
      label: "惊喜的",
      face: makeFace(`
        <path d="M58 62 Q71 48 84 60" />
        <path d="M142 62 Q129 48 116 60" />
        <circle cx="73" cy="92" r="12" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="92" r="12" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="92" r="3" fill="#343526" stroke="none" />
        <circle cx="127" cy="92" r="3" fill="#343526" stroke="none" />
        <ellipse cx="100" cy="136" rx="10" ry="14" fill="#343526" stroke="none" />
        <path d="M148 46 V66" fill="none" stroke="#343526" stroke-width="5" stroke-linecap="round" />
        <circle cx="148" cy="74" r="3" fill="#343526" stroke="none" />
      `),
    },
    {
      id: "delighted",
      label: "欣喜的",
      face: makeFace(`
        <path d="M58 92 Q73 78 88 92" />
        <path d="M112 92 Q127 78 142 92" />
        <path d="M60 116 Q100 162 140 116 Q100 138 60 116 Z" fill="#343526" stroke="none" />
        <path d="M76 124 Q100 118 124 124" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round" />
        <ellipse cx="100" cy="146" rx="10" ry="5" fill="#E88A8A" stroke="none" />
        <ellipse cx="54" cy="120" rx="12" ry="8" fill="#E4BFA6" stroke="none" opacity="0.75" />
        <ellipse cx="146" cy="120" rx="12" ry="8" fill="#E4BFA6" stroke="none" opacity="0.75" />
        <circle cx="40" cy="66" r="3" fill="#E85D5D" stroke="none" />
        <circle cx="160" cy="72" r="3" fill="#7FB7E8" stroke="none" />
        <circle cx="52" cy="48" r="2.5" fill="#F2D77C" stroke="none" />
        <circle cx="146" cy="52" r="2.5" fill="#7FC97F" stroke="none" />
        <circle cx="164" cy="104" r="2.5" fill="#F2D77C" stroke="none" />
        <circle cx="36" cy="104" r="2.5" fill="#7FC97F" stroke="none" />
      `),
    },
    {
      id: "peaceful",
      label: "安宁的",
      face: makeFace(`
        <path d="M62 80 H86" />
        <path d="M114 80 H138" />
        <path d="M58 96 Q73 86 88 96" />
        <path d="M112 96 Q127 86 142 96" />
        <path d="M56 92 l-5 -4 M144 92 l5 -4" fill="none" stroke="#343526" stroke-width="2.5" stroke-linecap="round" />
        <path d="M78 128 Q100 140 122 128" />
        <path d="M132 54 Q144 44 156 54 Q144 66 132 54 Z" fill="#7FC97F" stroke="none" />
        <path d="M132 54 Q142 54 150 60" fill="none" stroke="#343526" stroke-width="2" stroke-linecap="round" />
        <path d="M150 148 q0 -10 8 -12 q2 8 -8 12 Z" fill="#7FC97F" stroke="none" />
      `),
    },
    {
      id: "confident",
      label: "自信的",
      face: makeFace(`
        <path d="M58 74 Q71 70 84 74" />
        <path d="M116 64 Q129 56 142 66" />
        <path d="M58 94 Q73 84 88 94" />
        <path d="M56 90 l-4 -4 M58 98 l-5 4" fill="none" stroke="#343526" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="127" cy="94" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="93" r="3" fill="#343526" stroke="none" />
        <path d="M74 130 Q104 138 130 122" />
        <path d="M50 56 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#F2D77C" stroke="none" />
      `),
    },
    {
      id: "worried",
      label: "担忧的",
      face: makeFace(`
        <path d="M58 78 Q72 68 85 70" />
        <path d="M142 78 Q128 68 115 70" />
        <circle cx="73" cy="96" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="96" r="7" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="76" cy="96" r="2.5" fill="#343526" stroke="none" />
        <circle cx="130" cy="96" r="2.5" fill="#343526" stroke="none" />
        <path d="M84 134 Q100 126 116 134" />
        <path d="M154 76 C150 84 150 90 154 92 C158 90 158 84 154 76 Z" fill="#7FB7E8" stroke="none" />
      `),
    },
    {
      id: "lonely",
      label: "孤独的",
      face: makeFace(`
        <path d="M60 76 Q73 66 86 74" />
        <path d="M140 76 Q127 66 114 74" />
        <circle cx="73" cy="96" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="96" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="100" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="100" r="2.5" fill="#343526" stroke="none" />
        <path d="M84 134 H116" />
        <rect x="24" y="44" width="30" height="16" rx="8" fill="none" stroke="#8C877A" stroke-width="3" stroke-dasharray="5 4" />
        <path d="M34 60 l6 8 v-8" fill="none" stroke="#8C877A" stroke-width="3" stroke-linejoin="round" />
      `),
    },
    {
      id: "disappointed",
      label: "失望的",
      face: makeFace(`
        <path d="M58 76 Q72 66 85 72" />
        <path d="M142 76 Q128 66 115 72" />
        <path d="M60 96 Q73 106 86 96" />
        <path d="M114 96 Q127 106 140 96" />
        <path d="M78 136 Q100 124 122 136" />
        <path d="M124 132 q10 2 14 10" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
        <path d="M140 62 C140 56 148 54 150 59 C154 54 162 56 162 62 C162 70 150 78 150 78 C150 78 140 70 140 62 Z" fill="none" stroke="#343526" stroke-width="3" />
        <path d="M150 64 L146 70 L152 73 L148 77" fill="none" stroke="#343526" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      `),
    },
    {
      id: "frustrated",
      label: "受挫的",
      face: makeFace(`
        <path d="M56 70 L86 84" />
        <path d="M144 70 L114 84" />
        <path d="M60 94 Q73 100 86 94" />
        <path d="M114 94 Q127 100 140 94" />
        <path d="M78 128 L86 135 L94 128 L102 135 L110 128 L118 135 L126 128" />
        <path d="M92 62 q6 -4 12 0 M96 68 q6 -4 12 0" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
        <circle cx="144" cy="50" r="10" fill="none" stroke="#E85D5D" stroke-width="3" />
        <path d="M137 43 L151 57" fill="none" stroke="#E85D5D" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "guilty",
      label: "内疚的",
      face: makeFace(`
        <path d="M60 40 q-8 0 -8 8 q0 8 8 8 h24 q8 0 8 -8 q0 -8 -8 -8 q-2 -6 -10 -6 q-8 0 -10 6 Z" fill="#AEB4B8" stroke="none" />
        <path d="M58 78 Q72 66 85 72" />
        <path d="M142 78 Q128 66 115 72" />
        <circle cx="73" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="70" cy="97" r="2.5" fill="#343526" stroke="none" />
        <circle cx="124" cy="97" r="2.5" fill="#343526" stroke="none" />
        <path d="M84 132 q5 4 10 0 t10 0" />
        <ellipse cx="54" cy="118" rx="12" ry="8" fill="#E4BFA6" stroke="none" opacity="0.8" />
        <ellipse cx="146" cy="118" rx="12" ry="8" fill="#E4BFA6" stroke="none" opacity="0.8" />
        <path d="M150 80 C146 88 146 94 150 96 C154 94 154 88 150 80 Z" fill="#7FB7E8" stroke="none" />
      `),
    },
    {
      id: "terrified",
      label: "恐惧的",
      face: makeFace(`
        <circle cx="100" cy="100" r="72" fill="#BBDDF2" stroke="none" opacity="0.22" />
        <path d="M56 66 L86 78" />
        <path d="M144 66 L114 78" />
        <circle cx="73" cy="92" r="12" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="92" r="12" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="88" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="88" r="2.5" fill="#343526" stroke="none" />
        <ellipse cx="100" cy="140" rx="14" ry="19" fill="#343526" stroke="none" />
        <path d="M88 128 Q100 124 112 128" fill="none" stroke="#fffdf8" stroke-width="4" stroke-linecap="round" />
        <path d="M70 16 V6 M100 12 V2 M130 16 V6" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M34 90 h-8 M34 102 h-10 M34 114 h-8 M166 90 h8 M166 102 h10 M166 114 h8" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "anxious",
      label: "焦虑的",
      face: makeFace(`
        <path d="M58 74 Q72 64 85 70" />
        <path d="M142 74 Q128 64 115 70" />
        <circle cx="73" cy="94" r="9" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="9" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="78" cy="94" r="2.5" fill="#343526" stroke="none" />
        <circle cx="132" cy="94" r="2.5" fill="#343526" stroke="none" />
        <path d="M70 134 q7.5 -9 15 0 t15 0 t15 0 t15 0" />
        <path d="M44 76 C40 84 40 90 44 92 C48 90 48 84 44 76 Z" fill="#7FB7E8" stroke="none" />
        <path d="M156 72 C152 80 152 86 156 88 C160 86 160 80 156 72 Z" fill="#7FB7E8" stroke="none" />
        <path d="M150 58 C146 66 146 72 150 74 C154 72 154 66 150 58 Z" fill="#7FB7E8" stroke="none" />
        <path d="M60 44 q10 -12 20 0 t20 0 t20 0" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "confused",
      label: "困惑的",
      face: makeFace(`
        <path d="M58 72 Q71 60 84 66" />
        <path d="M116 80 L142 86" />
        <circle cx="73" cy="94" r="5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="96" r="9" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="71" cy="92" r="2" fill="#343526" stroke="none" />
        <circle cx="130" cy="99" r="3" fill="#343526" stroke="none" />
        <path d="M72 132 q7 -7 14 0 t14 0 t14 0" />
        <path d="M154 42 q12 0 12 11 q0 11 -12 10 q-10 -1 -8 -9 q2 -7 9 -4 q5 2 1 7" fill="none" stroke="#343526" stroke-width="3.5" stroke-linecap="round" />
      `),
    },
    {
      id: "annoyed",
      label: "烦躁的",
      face: makeFace(`
        <path d="M58 74 Q71 66 84 72" />
        <path d="M116 72 L142 72" />
        <path d="M60 92 Q73 102 86 92 Z" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <path d="M114 92 Q127 102 140 92 Z" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="98" r="2.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="98" r="2.5" fill="#343526" stroke="none" />
        <path d="M80 132 H120" />
        <path d="M120 132 q6 2 9 7" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
        <path d="M148 56 l10 -8 M152 64 l12 -4" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
        <path d="M154 40 l6 6 -6 6 -6 -6 Z" fill="#E85D5D" stroke="none" opacity="0.8" />
      `),
    },
    {
      id: "furious",
      label: "暴怒的",
      face: makeFace(`
        <circle cx="100" cy="100" r="72" fill="#E85D5D" stroke="none" opacity="0.18" />
        <path d="M54 66 L88 86" />
        <path d="M146 66 L112 86" />
        <circle cx="73" cy="96" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="96" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="77" cy="98" r="2.5" fill="#343526" stroke="none" />
        <circle cx="123" cy="98" r="2.5" fill="#343526" stroke="none" />
        <path d="M68 95 l-4 -3 M132 95 l4 -3" fill="none" stroke="#E85D5D" stroke-width="1.5" />
        <path d="M64 120 Q100 114 136 120 Q130 154 100 156 Q70 154 64 120 Z" fill="#343526" stroke="none" />
        <path d="M70 122 H130" fill="none" stroke="#fffdf8" stroke-width="5" stroke-linecap="round" />
        <ellipse cx="100" cy="146" rx="10" ry="5" fill="#E88A8A" stroke="none" />
        <path d="M40 62 q-10 -4 -6 -14 q4 -8 -2 -14" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M160 62 q10 -4 6 -14 q-4 -8 2 -14" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
      `),
    },
    {
      id: "helpless",
      label: "无助的",
      face: makeFace(`
        <path d="M58 76 Q72 64 85 72" />
        <path d="M142 76 Q128 64 115 72" />
        <circle cx="73" cy="94" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="73" cy="95" r="3.5" fill="#343526" stroke="none" />
        <circle cx="127" cy="95" r="3.5" fill="#343526" stroke="none" />
        <circle cx="75" cy="91" r="1.4" fill="#fffdf8" stroke="none" />
        <circle cx="129" cy="91" r="1.4" fill="#fffdf8" stroke="none" />
        <path d="M84 132 q5 5 10 0 t10 0" />
        <path d="M64 104 q-9 2 -12 10" fill="none" stroke="#7FB7E8" stroke-width="3" stroke-linecap="round" />
        <path d="M136 104 q9 2 12 10" fill="none" stroke="#7FB7E8" stroke-width="3" stroke-linecap="round" />
        <path d="M50 136 Q42 136 36 142" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M150 136 Q158 136 164 142" fill="none" stroke="#343526" stroke-width="4" stroke-linecap="round" />
        <path d="M30 146 q-2 -10 8 -10 q8 0 8 8 q0 8 -8 8 q-6 0 -8 -6 Z" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <path d="M170 146 q2 -10 -8 -10 q-8 0 -8 8 q0 8 8 8 q6 0 8 -6 Z" fill="#fffdf8" stroke="#343526" stroke-width="3" />
      `),
    },
    {
      id: "curious",
      label: "好奇的",
      face: makeFace(`
        <path d="M58 74 Q71 68 84 74" />
        <path d="M116 62 Q129 52 142 62" />
        <circle cx="73" cy="94" r="9" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="9" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="78" cy="90" r="3" fill="#343526" stroke="none" />
        <circle cx="132" cy="90" r="3" fill="#343526" stroke="none" />
        <ellipse cx="100" cy="132" rx="7" ry="9" fill="#343526" stroke="none" />
        <path d="M148 48 q10 -12 20 0 q0 10 -10 12 v5" fill="none" stroke="#343526" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="158" cy="72" r="2.5" fill="#343526" stroke="none" />
      `),
    },
    {
      id: "thoughtful",
      label: "若有所思的",
      face: makeFace(`
        <path d="M58 74 Q71 66 84 72" />
        <path d="M116 70 Q129 64 142 70" />
        <circle cx="73" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="76" cy="90" r="2.5" fill="#343526" stroke="none" />
        <circle cx="130" cy="90" r="2.5" fill="#343526" stroke="none" />
        <path d="M84 130 H116" />
        <circle cx="146" cy="58" r="4" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="158" cy="48" r="6" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="174" cy="34" r="8" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <path d="M68 128 q-6 2 -8 8" fill="none" stroke="#343526" stroke-width="3" stroke-linecap="round" />
      `),
    },
    {
      id: "hesitant",
      label: "犹豫的",
      face: makeFace(`
        <path d="M58 76 Q71 68 84 72" />
        <path d="M118 70 Q130 66 142 74" />
        <circle cx="73" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="127" cy="94" r="6.5" fill="#fffdf8" stroke="#343526" stroke-width="3" />
        <circle cx="70" cy="95" r="2.5" fill="#343526" stroke="none" />
        <circle cx="124" cy="95" r="2.5" fill="#343526" stroke="none" />
        <path d="M82 132 q6 -5 12 0 t12 0" />
        <circle cx="142" cy="64" r="3" fill="#343526" stroke="none" />
        <circle cx="152" cy="64" r="3" fill="#343526" stroke="none" />
        <circle cx="162" cy="64" r="3" fill="#343526" stroke="none" />
        <path d="M152 82 C148 90 148 96 152 98 C156 96 156 90 152 82 Z" fill="#7FB7E8" stroke="none" />
      `),
    },
  ];

  const COGNITIVE_COLORS = [
    { id: "red", name: "红色", hex: "#E85D5D" },
    { id: "blue", name: "蓝色", hex: "#5D7FE8" },
    { id: "yellow", name: "黄色", hex: "#F2D77C" },
    { id: "green", name: "绿色", hex: "#7FC97F" },
    { id: "orange", name: "橙色", hex: "#F4A261" },
    { id: "purple", name: "紫色", hex: "#B388EB" },
  ];

  const STROKE = "#343526";

  const COGNITIVE_ITEMS = [
    {
      id: "wash-basin",
      name: "洗手台",
      images: {
        blue: "assets/wash-basin-blue.png",
        green: "assets/wash-basin-green.png",
        yellow: "assets/wash-basin-yellow.png",
      },
      colors: ["blue", "green", "yellow"],
      render: (hex) => `
        <path d="M100 92 C147.5 92 186 110.8 186 134 C186 157.2 147.5 176 100 176 C52.5 176 14 157.2 14 134 C14 110.8 52.5 92 100 92 Z M100 102 C142 102 176 116.3 176 134 C176 151.7 142 166 100 166 C58 166 24 151.7 24 134 C24 116.3 58 102 100 102 Z" fill="${hex}" fill-rule="evenodd" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M46 128 q13.5 -9 27 0 t27 0 t27 0 t27 0" fill="none" stroke="#DDEEF5" stroke-width="6" stroke-linecap="round" />
        <rect x="91.5" y="52" width="9" height="46" rx="4.5" fill="${hex}" stroke="${STROKE}" stroke-width="2.1" />
        <rect x="104.5" y="52" width="9" height="46" rx="4.5" fill="${hex}" stroke="${STROKE}" stroke-width="2.1" />
        <path d="M88 54 v64 M97 54 v70 M106 54 v64" fill="none" stroke="#DDEEF5" stroke-width="6" stroke-linecap="round" />
        <circle cx="70" cy="84" r="12" fill="${hex}" stroke="${STROKE}" stroke-width="2.1" />
        <circle cx="70" cy="84" r="4.5" fill="#FFFCF6" />
        <circle cx="130" cy="84" r="12" fill="${hex}" stroke="${STROKE}" stroke-width="2.1" />
        <circle cx="130" cy="84" r="4.5" fill="#FFFCF6" />
        <rect x="66" y="20" width="46" height="42" rx="20" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "faucet",
      name: "水龙头",
      images: {
        red: "assets/faucet-red.png",
        blue: "assets/faucet-blue.png",
        green: "assets/faucet-green.png",
      },
      colors: ["red", "blue", "green"],
      render: (hex) => `
        <rect x="102" y="176" width="76" height="16" rx="6" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="124" y="84" width="36" height="94" rx="8" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M142 88 V52 Q142 30 120 30 H84 Q64 30 64 52 V66" fill="none" stroke="${STROKE}" stroke-width="14.4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M142 88 V52 Q142 30 120 30 H84 Q64 30 64 52 V66" fill="none" stroke="${hex}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="54" y="64" width="20" height="12" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="92" y="104" width="40" height="14" rx="7" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <circle cx="92" cy="111" r="11" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M64 84 v8" stroke="#67B7E8" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "hand-soap",
      name: "洗手液",
      colors: ["red", "green", "purple"],
      render: (hex) => `
        <rect x="70" y="84" width="60" height="76" rx="16" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="88" y="64" width="24" height="26" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M112 68 h24 v12 h-20" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M84 108 h32" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "soap-bar",
      name: "香皂",
      colors: ["red", "blue", "yellow", "green"],
      render: (hex) => `
        <rect x="48" y="78" width="104" height="60" rx="30" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M78 96 q22 -8 44 0" fill="none" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "mirror",
      name: "镜子",
      colors: ["blue", "green", "yellow"],
      render: (hex) => `
        <ellipse cx="100" cy="90" rx="46" ry="54" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <ellipse cx="100" cy="90" rx="34" ry="42" fill="#DDEEF5" stroke="${STROKE}" stroke-width="1.8" />
        <path d="M84 76 q10 -10 22 -6" fill="none" stroke="#FFFFFF" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" />
        <path d="M100 144 v14 M84 160 h32" fill="none" stroke="${STROKE}" stroke-width="3.6" stroke-linecap="round" />
      `,
    },
    {
      id: "toothbrush",
      name: "牙刷",
      images: {
        red: "assets/toothbrush-red.png",
        blue: "assets/toothbrush-blue.png",
        yellow: "assets/toothbrush-yellow.png",
        green: "assets/toothbrush-green.png",
      },
      colors: ["red", "blue", "yellow", "green"],
      render: (hex) => `
        <g transform="rotate(-12 100 100)">
          <rect x="34" y="108" width="104" height="18" rx="9" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
          <rect x="130" y="92" width="44" height="34" rx="14" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
          <path d="M140 100 v18 M148.5 98 v20 M157 98 v20 M165.5 100 v18" stroke="#FFFFFF" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" />
          <path d="M48 117 h18 M72 117 h18" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" />
        </g>
      `,
    },
    {
      id: "tooth-cup",
      name: "牙杯",
      colors: ["red", "yellow", "purple"],
      render: (hex) => `
        <path d="M64 78 h72 l-9 72 a8 8 0 0 1 -8 7 h-38 a8 8 0 0 1 -8 -7 z" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" stroke-linejoin="round" />
        <ellipse cx="100" cy="78" rx="36" ry="9" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "towel",
      name: "毛巾",
      colors: ["red", "blue", "green", "orange"],
      render: (hex) => `
        <rect x="22" y="10" width="136" height="186" rx="8" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="158" y="10" width="28" height="174" rx="12" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="24" y="140" width="132" height="8" fill="#FFFFFF" fill-opacity="0.55" />
        <rect x="24" y="162" width="132" height="10" fill="#FFFFFF" fill-opacity="0.38" />
        <path d="M170 26 v146" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="4" stroke-linecap="round" />
        <rect x="4" y="8" width="192" height="14" rx="7" fill="#C9BFA5" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "toothpaste",
      name: "牙膏",
      colors: ["blue", "green", "orange"],
      render: (hex) => `
        <rect x="47" y="4" width="106" height="23" rx="6" fill="#fffdf8" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="51" y="10" width="98" height="7" rx="3.5" fill="${hex}" />
        <path d="M49 27 H151 L140 150 H60 Z" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M55 31 H68 L72 146 H61 Z" fill="${STROKE}" fill-opacity="0.1" />
        <path d="M83.6 46.9 Q95.8 44.8 99.2 51.6 L107 46.9 L113.3 46.9 L123.4 53.9 Q126.6 57.8 125 66.4 L117.2 77.3 L117.2 83.6 L120.3 89.8 L120.3 97.7 Q118.4 105 107 103.1 L99.2 93.8 L96.9 101.6 Q94.2 103.9 86.7 103.1 L81.3 97.7 L81.3 83.6 L71.9 69.5 L71.9 58.6 L80.5 48.4 Z" fill="#fffdf8" stroke="${STROKE}" stroke-width="2.1" stroke-linejoin="round" />
        <path d="M109 82 Q103 88 104 96 Q105 101 111 101" fill="none" stroke="${STROKE}" stroke-opacity="0.35" stroke-width="1.8" stroke-linecap="round" />
        <rect x="72" y="116" width="56" height="7" rx="3.5" fill="#FFFFFF" fill-opacity="0.8" />
        <rect x="76" y="128" width="48" height="7" rx="3.5" fill="#FFFFFF" fill-opacity="0.65" />
        <rect x="60" y="150" width="80" height="9" rx="4" fill="${STROKE}" />
        <rect x="66" y="159" width="68" height="13" rx="4" fill="#fffdf8" stroke="${STROKE}" stroke-width="2.1" />
        <rect x="67" y="172" width="66" height="6" rx="3" fill="${STROKE}" />
        <rect x="72" y="178" width="56" height="14" rx="7" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "bed",
      name: "床",
      colors: ["red", "blue", "green"],
      render: (hex) => `
        <rect x="38" y="80" width="18" height="66" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="40" y="104" width="120" height="40" rx="8" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="60" y="90" width="36" height="18" rx="6" fill="#FFFFFF" stroke="${STROKE}" stroke-width="2.4" />
        <path d="M96 104 v40" stroke="${STROKE}" stroke-width="1.8" />
        <rect x="46" y="144" width="12" height="16" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="142" y="144" width="12" height="16" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "table",
      name: "桌子",
      colors: ["yellow", "green", "orange"],
      render: (hex) => `
        <rect x="40" y="86" width="120" height="16" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="52" y="102" width="12" height="58" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="136" y="102" width="12" height="58" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="96" y="102" width="12" height="50" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "chair",
      name: "椅子",
      colors: ["blue", "yellow", "green"],
      render: (hex) => `
        <rect x="64" y="44" width="18" height="78" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="64" y="104" width="70" height="16" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="68" y="120" width="13" height="42" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="120" y="120" width="13" height="42" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "tv",
      name: "电视",
      colors: ["red", "blue", "purple"],
      render: (hex) => `
        <path d="M100 54 L76 26 M100 54 L124 26" fill="none" stroke="${STROKE}" stroke-width="2.4" stroke-linecap="round" />
        <circle cx="76" cy="26" r="4" fill="${STROKE}" />
        <circle cx="124" cy="26" r="4" fill="${STROKE}" />
        <rect x="36" y="54" width="128" height="86" rx="10" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="46" y="64" width="108" height="56" rx="4" fill="#DDEEF5" stroke="${STROKE}" stroke-width="1.8" />
        <circle cx="54" cy="130" r="3" fill="${STROKE}" />
        <circle cx="66" cy="130" r="3" fill="${STROKE}" />
        <rect x="84" y="140" width="32" height="10" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="62" y="150" width="76" height="8" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
      `,
    },
    {
      id: "door",
      name: "门",
      colors: ["red", "blue", "green", "orange"],
      render: (hex) => `
        <rect x="58" y="42" width="84" height="118" rx="6" fill="${hex}" stroke="${STROKE}" stroke-width="2.4" />
        <rect x="70" y="56" width="60" height="40" rx="4" fill="none" stroke="${STROKE}" stroke-width="1.8" />
        <rect x="70" y="106" width="60" height="40" rx="4" fill="none" stroke="${STROKE}" stroke-width="1.8" />
        <circle cx="128" cy="104" r="5" fill="${STROKE}" />
      `,
    },
  ];

  const makeObject = (itemId, colorId) => {
    const item = COGNITIVE_ITEMS.find((i) => i.id === itemId);
    if (!item) {
      return "";
    }

    if (item.images) {
      const fallbackId = item.colors && item.colors[0];
      const src = item.images[colorId] || item.images[fallbackId];
      if (src) {
        return `<img src="${src}" alt="" class="object-image" loading="eager" decoding="async" />`;
      }
    }

    const color = COGNITIVE_COLORS.find((c) => c.id === colorId) || COGNITIVE_COLORS[0];

    return `
      <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <g>${item.render(color.hex)}</g>
      </svg>
    `;
  };

  const cognitiveImageSources = Array.from(
    new Set(
      COGNITIVE_ITEMS.flatMap((item) => (item.images ? Object.values(item.images) : [])),
    ),
  );
  const preloadedCognitiveImages = new Map();

  function preloadCognitiveImages() {
    cognitiveImageSources.forEach((src) => {
      if (preloadedCognitiveImages.has(src)) {
        return;
      }

      const image = new Image();
      image.decoding = "async";
      image.src = src;
      preloadedCognitiveImages.set(src, image);

      if (typeof image.decode === "function") {
        image.decode().catch(() => {});
      }
    });
  }

  preloadCognitiveImages();

  const SCENE_COLORS = {
    green: "#b9d878",
    soft: "#eff7dc",
    paper: "#fffdf8",
    ink: "#343526",
    blue: "#9dc8e8",
    yellow: "#f2d77c",
    coral: "#e85d5d",
    purple: "#b388eb",
  };

  const SCENES = {
    cup: `
      <path d="M62 70 h70 l-8 74 a12 12 0 0 1 -12 10 H82 a12 12 0 0 1 -12 -10 Z" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M132 88 q26 4 20 26 q-4 14 -24 12" fill="none" stroke="${SCENE_COLORS.ink}" stroke-width="5" />
      <path d="M88 66 q12 -18 24 0" fill="none" stroke="${SCENE_COLORS.coral}" stroke-width="4" stroke-linecap="round" />
    `,
    blocks: `
      <rect x="48" y="116" width="46" height="42" rx="6" fill="${SCENE_COLORS.coral}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="104" y="116" width="46" height="42" rx="6" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="76" y="70" width="46" height="42" rx="6" fill="${SCENE_COLORS.yellow}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
    `,
    sound: `
      <path d="M52 96 h22 l28 -24 v56 l-28 -24 H52 Z" fill="${SCENE_COLORS.yellow}" stroke="${SCENE_COLORS.ink}" stroke-width="4" stroke-linejoin="round" />
      <path d="M120 78 q18 18 0 36 M136 64 q30 30 0 60" fill="none" stroke="${SCENE_COLORS.coral}" stroke-width="5" stroke-linecap="round" />
    `,
    rest: `
      <path d="M52 126 q8 -44 44 -44 h38 q22 0 22 22 v34 H52 Z" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="94" cy="82" r="20" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M74 76 q20 -18 40 0" fill="none" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M146 44 q8 -10 16 0 q8 -10 16 0" fill="none" stroke="${SCENE_COLORS.purple}" stroke-width="4" stroke-linecap="round" />
    `,
    gift: `
      <rect x="52" y="88" width="96" height="68" rx="8" fill="${SCENE_COLORS.coral}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="46" y="76" width="108" height="22" rx="6" fill="${SCENE_COLORS.yellow}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M100 76 V156 M100 76 q-28 -24 -34 -4 q18 14 34 4 M100 76 q28 -24 34 -4 q-18 14 -34 4" fill="none" stroke="${SCENE_COLORS.paper}" stroke-width="5" stroke-linecap="round" />
    `,
    ask: `
      <path d="M48 60 h104 a12 12 0 0 1 12 12 v64 a12 12 0 0 1 -12 12 H84 l-28 22 v-22 h-8 a12 12 0 0 1 -12 -12 V72 a12 12 0 0 1 12 -12 Z" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M82 102 q8 -14 18 -4 q8 8 0 18 q-6 6 -6 14" fill="none" stroke="${SCENE_COLORS.ink}" stroke-width="5" stroke-linecap="round" />
      <circle cx="98" cy="144" r="4" fill="${SCENE_COLORS.ink}" />
    `,
    friends: `
      <circle cx="64" cy="78" r="20" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="136" cy="78" r="20" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="100" cy="58" r="18" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M30 152 a34 34 0 0 1 68 0 M102 152 a34 34 0 0 1 68 0" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
    `,
    join: `
      <circle cx="70" cy="74" r="18" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="140" cy="88" r="16" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="54" y="112" width="72" height="40" rx="8" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M126 126 h26 M140 112 v28" stroke="${SCENE_COLORS.coral}" stroke-width="6" stroke-linecap="round" />
    `,
    space: `
      <circle cx="62" cy="92" r="20" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="146" cy="92" r="20" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M86 92 h28" stroke="${SCENE_COLORS.coral}" stroke-width="5" stroke-linecap="round" />
      <path d="M108 82 l8 10 -8 10" fill="none" stroke="${SCENE_COLORS.coral}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    `,
    thanks: `
      <path d="M122 62 C122 52 136 50 138 60 C142 50 158 54 154 68 C150 82 138 90 138 90 C138 90 122 78 122 62 Z" fill="${SCENE_COLORS.coral}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M46 142 l14 -38 h56 l14 38 z" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="74" cy="82" r="18" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
    `,
    listening: `
      <circle cx="100" cy="72" r="22" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M60 154 a40 40 0 0 1 80 0" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M42 84 q14 -14 28 0 M130 84 q14 -14 28 0" fill="none" stroke="${SCENE_COLORS.purple}" stroke-width="5" stroke-linecap="round" />
    `,
    turn: `
      <circle cx="100" cy="100" r="62" fill="none" stroke="${SCENE_COLORS.ink}" stroke-width="6" stroke-dasharray="18 12" />
      <path d="M136 62 l10 22 -24 2" fill="none" stroke="${SCENE_COLORS.coral}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="100" cy="100" r="22" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
    `,
    soap: `
      <rect x="64" y="78" width="72" height="76" rx="12" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="84" y="56" width="32" height="24" rx="6" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="100" cy="118" r="14" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M118 64 q30 4 20 28" fill="none" stroke="${SCENE_COLORS.coral}" stroke-width="5" stroke-linecap="round" />
    `,
    towel: `
      <rect x="44" y="42" width="112" height="116" rx="14" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M60 78 h80 M60 106 h80" stroke="${SCENE_COLORS.paper}" stroke-opacity="0.8" stroke-width="8" stroke-linecap="round" />
      <path d="M100 42 v-16" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <circle cx="100" cy="20" r="5" fill="${SCENE_COLORS.ink}" />
    `,
    paste: `
      <g transform="rotate(-18 100 100)">
        <rect x="42" y="88" width="116" height="24" rx="12" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
        <rect x="142" y="82" width="24" height="36" rx="8" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
        <path d="M154 86 v28" stroke="${SCENE_COLORS.green}" stroke-width="6" stroke-linecap="round" />
      </g>
    `,
    rinse: `
      <path d="M62 74 h76 l-10 76 a10 10 0 0 1 -10 8 H82 a10 10 0 0 1 -10 -8 Z" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M84 60 q16 -20 32 0" fill="none" stroke="${SCENE_COLORS.paper}" stroke-width="6" stroke-linecap="round" />
      <path d="M92 48 v-14 M108 48 v-14" stroke="${SCENE_COLORS.paper}" stroke-width="5" stroke-linecap="round" />
    `,
    clothes: `
      <path d="M72 58 l20 -12 q8 12 16 0 l20 12 22 24 -20 16 -10 -12 v62 H80 V86 l-10 12 -20 -16 Z" fill="${SCENE_COLORS.yellow}" stroke="${SCENE_COLORS.ink}" stroke-width="4" stroke-linejoin="round" />
      <path d="M92 46 q8 22 16 0" fill="none" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
    `,
    tidy: `
      <rect x="48" y="108" width="104" height="46" rx="6" fill="${SCENE_COLORS.green}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="68" y="76" width="30" height="32" rx="5" fill="${SCENE_COLORS.coral}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <rect x="104" y="68" width="30" height="40" rx="5" fill="${SCENE_COLORS.blue}" stroke="${SCENE_COLORS.ink}" stroke-width="4" />
      <path d="M138 52 q14 14 0 28 q-14 -14 0 -28 Z" fill="${SCENE_COLORS.yellow}" stroke="${SCENE_COLORS.ink}" stroke-width="3" />
    `,
  };

  const makeScene = (name) => `
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="82" fill="${SCENE_COLORS.soft}" />
      <rect x="26" y="26" width="148" height="148" rx="32" fill="${SCENE_COLORS.paper}" stroke="${SCENE_COLORS.ink}" stroke-width="3" />
      <g stroke-linecap="round" stroke-linejoin="round">${SCENES[name] || SCENES.ask}</g>
    </svg>
  `;

  const makeOptionSet = (correct, distractors) =>
    shuffle([
      { label: correct, correct: true },
      ...distractors.map((label) => ({ label, correct: false })),
    ]);

  const makeEmotionQuestion = (emotion) => {
    const distractors = shuffle(EMOTIONS.filter((entry) => entry.id !== emotion.id))
      .slice(0, 2)
      .map((entry) => entry.label);
    return {
      id: emotion.id,
      prompt: "这是什么表情？",
      display: emotion.face,
      displayLabel: `${emotion.label}的脸`,
      options: makeOptionSet(emotion.label, distractors),
      success: `对了，这是${emotion.label}。`,
    };
  };

  const makeCognitiveQuestion = (target) => {
    const item = COGNITIVE_ITEMS.find((entry) => entry.id === target.itemId);
    const correct = item ? item.name : target.itemName;
    const color = COGNITIVE_COLORS.find((entry) => entry.id === target.colorId);
    const distractors = shuffle(COGNITIVE_ITEMS.filter((entry) => entry.id !== target.itemId))
      .slice(0, 2)
      .map((entry) => entry.name);
    return {
      id: `${target.itemId}-${target.colorId}`,
      prompt: "这是什么物品？",
      display: makeObject(target.itemId, target.colorId),
      displayLabel: color ? `${color.name}${correct}` : correct,
      options: makeOptionSet(correct, distractors),
      success: `对了，这是${color ? color.name : ""}${correct}。`,
    };
  };

  const EXPRESSION_QUESTIONS = [
    {
      id: "expression-water",
      prompt: "你想喝水，可以说什么？",
      display: makeScene("cup"),
      displayLabel: "一杯水",
      options: makeOptionSet("我想喝水，可以吗？", ["我不用水。", "这是红色。"]),
      success: "很好，这样说很清楚。",
    },
    {
      id: "expression-blocks",
      prompt: "你想玩积木，可以说什么？",
      display: makeScene("blocks"),
      displayLabel: "几块彩色积木",
      options: makeOptionSet("我可以玩积木吗？", ["积木不好。", "我要睡觉。"]),
      success: "很好，可以这样说。",
    },
    {
      id: "expression-sound",
      prompt: "声音太大了，可以说什么？",
      display: makeScene("sound"),
      displayLabel: "很大的声音",
      options: makeOptionSet("声音太大了，请小一点。", ["声音不见了。", "请大声一点。"]),
      success: "很好，你表达了感受。",
    },
    {
      id: "expression-rest",
      prompt: "你累了，可以说什么？",
      display: makeScene("rest"),
      displayLabel: "一个人在休息",
      options: makeOptionSet("我累了，想休息一下。", ["我不累。", "我想跑步。"]),
      success: "很好，你表达了需要。",
    },
    {
      id: "expression-gift",
      prompt: "你喜欢这个礼物，可以说什么？",
      display: makeScene("gift"),
      displayLabel: "一份礼物",
      options: makeOptionSet("我很喜欢，谢谢你！", ["我不需要。", "这是什么颜色？"]),
      success: "很好，表达了喜欢和感谢。",
    },
    {
      id: "expression-repeat",
      prompt: "你没听懂，可以说什么？",
      display: makeScene("ask"),
      displayLabel: "一个问号",
      options: makeOptionSet("可以再说一遍吗？", ["我知道了。", "请走开。"]),
      success: "很好，你请求了帮助。",
    },
  ];

  const SOCIAL_QUESTIONS = [
    {
      id: "social-turn",
      prompt: "大家轮流说话。轮到你时怎么做？",
      display: makeScene("turn"),
      displayLabel: "轮到你了",
      options: makeOptionSet("我来说，然后听别人说。", ["一直说，不让别人说。", "直接走开。"]),
      success: "很好，这叫轮流。",
    },
    {
      id: "social-join",
      prompt: "同学正在搭积木，你想加入。怎么说？",
      display: makeScene("join"),
      displayLabel: "同学正在玩积木",
      options: makeOptionSet("我可以一起玩吗？", ["把积木拿走。", "不要玩了。"]),
      success: "很好，你礼貌地加入了。",
    },
    {
      id: "social-space",
      prompt: "排队时有人站得很近。你会怎么做？",
      display: makeScene("space"),
      displayLabel: "两个人站得很近",
      options: makeOptionSet("后退一点，留出空间。", ["推他一下。", "紧贴着他。"]),
      success: "很好，你保持了个人空间。",
    },
    {
      id: "social-thanks",
      prompt: "朋友把玩具递给你。你会怎么做？",
      display: makeScene("thanks"),
      displayLabel: "朋友递来玩具",
      options: makeOptionSet("说谢谢，然后好好玩。", ["不看他，直接拿走。", "把玩具丢掉。"]),
      success: "很好，你有礼貌地接受了。",
    },
    {
      id: "social-listen",
      prompt: "别人正在说话。你会怎么做？",
      display: makeScene("listening"),
      displayLabel: "一个人在说话",
      options: makeOptionSet("看着他，认真听。", ["大声说话。", "一直看别处。"]),
      success: "很好，这是认真倾听。",
    },
    {
      id: "social-friends",
      prompt: "大家一起做游戏。你会怎么做？",
      display: makeScene("friends"),
      displayLabel: "几个小朋友在一起",
      options: makeOptionSet("和大家一起合作。", ["只让自己赢。", "不让别人参加。"]),
      success: "很好，合作让游戏更开心。",
    },
  ];

  const DAILY_QUESTIONS = [
    {
      id: "daily-wash-start",
      prompt: "洗手时，第一步做什么？",
      display: makeObject("wash-basin", "blue"),
      displayLabel: "蓝色洗手台",
      options: makeOptionSet("打开水龙头", ["擦干手", "关灯"]),
      success: "对了，先打开水龙头。",
    },
    {
      id: "daily-wash-end",
      prompt: "洗完手后，下一步做什么？",
      display: makeScene("towel"),
      displayLabel: "一条毛巾",
      options: makeOptionSet("用毛巾擦干手", ["把手放进口里", "直接跑开"]),
      success: "对了，要把手擦干。",
    },
    {
      id: "daily-brush-start",
      prompt: "刷牙前要做什么？",
      display: makeScene("paste"),
      displayLabel: "牙刷和牙膏",
      options: makeOptionSet("挤出牙膏", ["穿上鞋", "打开电视"]),
      success: "对了，先挤出牙膏。",
    },
    {
      id: "daily-brush-end",
      prompt: "刷牙后要做什么？",
      display: makeScene("rinse"),
      displayLabel: "一杯水",
      options: makeOptionSet("漱口并擦嘴", ["把牙膏吃掉", "马上睡觉"]),
      success: "对了，要漱口并擦嘴。",
    },
    {
      id: "daily-dress",
      prompt: "早上起床后，先做什么？",
      display: makeScene("clothes"),
      displayLabel: "一件衣服",
      options: makeOptionSet("穿衣服", ["整理玩具", "刷牙"]),
      success: "很好，先穿好衣服。",
    },
    {
      id: "daily-tidy",
      prompt: "玩完玩具后，应该做什么？",
      display: makeScene("tidy"),
      displayLabel: "玩具和收纳盒",
      options: makeOptionSet("把玩具放回原处", ["把玩具丢在地上", "藏起来"]),
      success: "对了，玩完要整理好。",
    },
  ];

  const TRAININGS = {
    emotion: {
      name: "情绪识别",
      build: () => shuffle([...EMOTIONS]).slice(0, 6).map(makeEmotionQuestion),
    },
    expression: {
      name: "自我表达",
      build: () => shuffle([...EXPRESSION_QUESTIONS]),
    },
    cognitive: {
      name: "基础认知",
      build: () => {
        const targets = [];
        COGNITIVE_ITEMS.forEach((item) => {
          (item.colors || []).forEach((colorId) => {
            targets.push({ itemId: item.id, itemName: item.name, colorId });
          });
        });
        return shuffle(targets).slice(0, 6).map(makeCognitiveQuestion);
      },
    },
    social: {
      name: "社交理解",
      build: () => shuffle([...SOCIAL_QUESTIONS]),
    },
    daily: {
      name: "生活技能",
      build: () => shuffle([...DAILY_QUESTIONS]),
    },
  };

  const els = {
    aboutScreen: document.getElementById("screen-about"),
    startScreen: document.getElementById("screen-start"),
    menuScreen: document.getElementById("screen-menu"),
    practiceScreen: document.getElementById("screen-practice"),
    aboutStartBtn: document.getElementById("about-start-btn"),
    startAboutBtn: document.getElementById("start-about-btn"),
    startBtn: document.getElementById("start-btn"),
    menuBackBtn: document.getElementById("menu-back-btn"),
    menuCards: Array.from(document.querySelectorAll(".menu-card[data-module]")),
    settingsBtn: document.getElementById("settings-btn"),
    quitBtn: document.getElementById("quit-btn"),
    overlay: document.getElementById("settings-overlay"),
    dialog: document.getElementById("settings-dialog"),
    closeSettingsBtn: document.getElementById("close-settings-btn"),
    restartBtn: document.getElementById("restart-btn"),
    homeBtn: document.getElementById("home-btn"),
    displayArea: document.getElementById("display-area"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
    practicePrompt: document.getElementById("practice-prompt"),
    practiceModule: document.getElementById("practice-module"),
    progressDots: document.getElementById("progress-dots"),
    progressLabel: document.getElementById("progress-label"),
  };

  let queue = [];
  let previousItem = null;
  let currentItem = null;
  let locked = false;
  let lastFocused = null;
  let currentPractice = "emotion";
  let sessionTotal = 0;
  let sessionIndex = 0;

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function buildQuestions(type) {
    const training = TRAININGS[type] || TRAININGS.emotion;
    const questions = training.build();

    if (questions.length > 1 && previousItem && questions[0].id === previousItem.id) {
      const swapAt = questions.findIndex((question, index) => index > 0 && question.id !== previousItem.id);
      if (swapAt !== -1) {
        [questions[0], questions[swapAt]] = [questions[swapAt], questions[0]];
      }
    }

    return questions;
  }

  function renderProgress() {
    els.progressDots.innerHTML = "";

    for (let index = 0; index < sessionTotal; index += 1) {
      const dot = document.createElement("span");
      dot.className = "progress-dot";
      if (index < sessionIndex - 1) {
        dot.classList.add("is-done");
      } else if (index === sessionIndex - 1) {
        dot.classList.add("is-active");
      }
      els.progressDots.appendChild(dot);
    }

    els.progressLabel.textContent = `${sessionIndex}/${sessionTotal}`;
  }

  function buildNextButton() {
    const nextButton = document.createElement("button");
    nextButton.id = "next-btn";
    nextButton.type = "button";
    nextButton.className = "next-btn";
    nextButton.textContent = "下一题";
    nextButton.addEventListener("click", nextQuestion);
    return nextButton;
  }

  function renderQuestion() {
    if (queue.length === 0) {
      queue = buildQuestions(currentPractice);
      sessionTotal = queue.length;
      sessionIndex = 0;
    }

    const target = queue.shift();
    previousItem = target;
    currentItem = target;
    locked = false;
    sessionIndex += 1;

    const training = TRAININGS[currentPractice] || TRAININGS.emotion;
    els.practiceModule.textContent = training.name;
    els.practicePrompt.textContent = target.prompt || "这是什么？";
    els.displayArea.innerHTML = target.display;
    els.displayArea.setAttribute("aria-label", target.displayLabel || "练习图片");
    els.feedback.textContent = "";
    els.answers.innerHTML = "";
    els.answers.classList.remove("answers--two", "answers--one");

    const useTextAnswers = target.options.some((option) => option.label.length > 6);

    target.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `answer-btn${useTextAnswers ? " answer-btn--text" : ""}`;
      button.textContent = option.label;
      button.addEventListener("click", () => handleAnswer(button, option));
      els.answers.appendChild(button);
    });

    renderProgress();
  }

  function showCorrectAnswer() {
    locked = true;
    els.answers.innerHTML = "";
    els.answers.classList.remove("answers--two");
    els.answers.classList.add("answers--one");

    const nextButton = buildNextButton();
    els.answers.appendChild(nextButton);

    els.feedback.textContent = currentItem && currentItem.success ? currentItem.success : "对了！";
    nextButton.focus({ preventScroll: true });
  }

  function hideWrongAnswer(button) {
    button.classList.add("is-hidden");
    button.disabled = true;

    const remaining = Array.from(els.answers.children).filter((child) => !child.classList.contains("is-hidden"));
    if (remaining.length === 1) {
      els.answers.classList.remove("answers--two");
      els.answers.classList.add("answers--one");
    } else if (remaining.length === 2) {
      els.answers.classList.remove("answers--one");
      els.answers.classList.add("answers--two");
    }

    els.feedback.textContent = "没关系，再试一次";
  }

  function handleAnswer(button, option) {
    if (locked) {
      return;
    }

    if (option.correct) {
      showCorrectAnswer();
      return;
    }

    hideWrongAnswer(button);
  }

  function focusFirstAnswer() {
    const firstAnswer = els.answers.querySelector(".answer-btn:not(.is-hidden):not(:disabled)");
    if (firstAnswer) {
      firstAnswer.focus({ preventScroll: true });
    }
  }

  function showScreen(name) {
    els.aboutScreen.hidden = name !== "about";
    els.startScreen.hidden = name !== "start";
    els.menuScreen.hidden = name !== "menu";
    els.practiceScreen.hidden = name !== "practice";
    window.scrollTo(0, 0);
  }

  function openAbout() {
    showScreen("about");
  }

  function enterFromAbout() {
    showScreen("start");
    els.startBtn.focus({ preventScroll: true });
  }

  function openMenu() {
    showScreen("menu");
    const firstCard = els.menuCards[0];
    if (firstCard) {
      firstCard.focus({ preventScroll: true });
    }
  }

  function startSession(type) {
    currentPractice = TRAININGS[type] ? type : "emotion";
    queue = buildQuestions(currentPractice);
    sessionTotal = queue.length;
    sessionIndex = 0;
    previousItem = null;
    currentItem = null;
    locked = false;
    renderQuestion();
    showScreen("practice");
    focusFirstAnswer();
  }

  function nextQuestion() {
    renderQuestion();
    focusFirstAnswer();
  }

  function openSettings() {
    if (!els.overlay.hidden) {
      return;
    }

    lastFocused = document.activeElement;
    els.overlay.hidden = false;
    els.aboutScreen.inert = true;
    els.startScreen.inert = true;
    els.menuScreen.inert = true;
    els.practiceScreen.inert = true;
    els.settingsBtn.setAttribute("aria-expanded", "true");
    els.closeSettingsBtn.focus({ preventScroll: true });
    document.addEventListener("keydown", handleDialogKeydown);
  }

  function closeSettings(returnFocus = true) {
    if (els.overlay.hidden) {
      return;
    }

    els.overlay.hidden = true;
    els.aboutScreen.inert = false;
    els.startScreen.inert = false;
    els.menuScreen.inert = false;
    els.practiceScreen.inert = false;
    els.settingsBtn.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", handleDialogKeydown);

    if (returnFocus) {
      const focusTarget = lastFocused instanceof HTMLElement ? lastFocused : els.settingsBtn;
      focusTarget.focus({ preventScroll: true });
    }
  }

  function handleDialogKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSettings();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(els.dialog.querySelectorAll("button:not(:disabled)"));
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function restartSession() {
    closeSettings(false);
    startSession(currentPractice);
  }

  function goHome() {
    queue = [];
    previousItem = null;
    currentItem = null;
    locked = false;
    sessionTotal = 0;
    sessionIndex = 0;
    closeSettings(false);
    showScreen("start");
    els.startBtn.focus({ preventScroll: true });
  }

  els.aboutStartBtn.addEventListener("click", enterFromAbout);
  els.startAboutBtn.addEventListener("click", openAbout);
  els.startBtn.addEventListener("click", openMenu);
  els.menuBackBtn.addEventListener("click", goHome);
  els.menuCards.forEach((card) => {
    card.addEventListener("click", () => startSession(card.dataset.module));
  });
  els.settingsBtn.addEventListener("click", openSettings);
  els.quitBtn.addEventListener("click", openMenu);
  els.closeSettingsBtn.addEventListener("click", () => closeSettings());
  els.restartBtn.addEventListener("click", restartSession);
  els.homeBtn.addEventListener("click", goHome);

  els.overlay.addEventListener("click", (event) => {
    if (event.target === els.overlay) {
      closeSettings();
    }
  });
})();
