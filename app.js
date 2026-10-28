(() => {
  "use strict";

  const makeFace = (features) => `
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="82" fill="#ECEEDC" />
      <circle cx="100" cy="100" r="74" fill="#FFFCF4" stroke="#4A4433" stroke-width="4" />
      <g fill="none" stroke="#4A4433" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        ${features}
      </g>
    </svg>
  `;

  const EMOTIONS = [
    {
      id: "happy",
      label: "开心",
      face: makeFace(`
        <path d="M62 92 Q73 80 84 92" />
        <path d="M116 92 Q127 80 138 92" />
        <path d="M64 121 Q100 154 136 121" />
        <ellipse cx="56" cy="118" rx="10" ry="6" fill="#E4BFA6" stroke="none" opacity="0.7" />
        <ellipse cx="144" cy="118" rx="10" ry="6" fill="#E4BFA6" stroke="none" opacity="0.7" />
      `),
    },
    {
      id: "sad",
      label: "难过",
      face: makeFace(`
        <path d="M58 76 Q71 64 84 70" />
        <path d="M116 70 Q129 64 142 76" />
        <circle cx="73" cy="94" r="4.5" fill="#4A4433" stroke="none" />
        <circle cx="127" cy="94" r="4.5" fill="#4A4433" stroke="none" />
        <path d="M73 106 C69 113 69 117 73 119 C77 117 77 113 73 106 Z" fill="#D8D2BD" stroke="#4A4433" stroke-width="2.5" />
        <path d="M68 141 Q100 113 132 141" />
      `),
    },
    {
      id: "angry",
      label: "生气",
      face: makeFace(`
        <path d="M58 72 L84 82" />
        <path d="M142 72 L116 82" />
        <circle cx="73" cy="95" r="4.5" fill="#4A4433" stroke="none" />
        <circle cx="127" cy="95" r="4.5" fill="#4A4433" stroke="none" />
        <path d="M66 142 Q100 116 134 142" />
      `),
    },
    {
      id: "nervous",
      label: "紧张",
      face: makeFace(`
        <path d="M58 74 Q71 62 84 74" />
        <path d="M116 74 Q129 62 142 74" />
        <circle cx="73" cy="95" r="5" fill="#4A4433" stroke="none" />
        <circle cx="127" cy="95" r="5" fill="#4A4433" stroke="none" />
        <path d="M66 132 q8.5 -9 17 0 t17 0 t17 0 t17 0" />
        <path d="M156 64 C150 74 150 80 156 83 C162 80 162 74 156 64 Z" fill="#D8D2BD" stroke="#4A4433" stroke-width="2.5" />
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

  const STROKE = "#4A4433";

  const COGNITIVE_ITEMS = [
    {
      id: "wash-basin",
      name: "洗手台",
      colors: ["blue", "green", "yellow"],
      render: (hex) => `
        <ellipse cx="100" cy="186" rx="34" ry="8" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M84 146 h32 l10 38 h-52 z" fill="${hex}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round" />
        <path d="M16 80 C20 122 48 152 100 152 C152 152 180 122 184 80 Z" fill="${hex}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round" />
        <ellipse cx="100" cy="80" rx="84" ry="16" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <ellipse cx="100" cy="82" rx="64" ry="11" fill="#DDEEF5" stroke="${STROKE}" stroke-width="2.5" />
        <circle cx="100" cy="132" r="5" fill="${STROKE}" />
        <rect x="60" y="50" width="80" height="8" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="3" />
        <rect x="92" y="18" width="16" height="48" rx="6" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <circle cx="100" cy="16" r="8" fill="${hex}" stroke="${STROKE}" stroke-width="3" />
        <rect x="88" y="60" width="24" height="8" rx="3" fill="${hex}" stroke="${STROKE}" stroke-width="3" />
        <circle cx="62" cy="54" r="11" fill="${hex}" stroke="${STROKE}" stroke-width="3" />
        <circle cx="138" cy="54" r="11" fill="${hex}" stroke="${STROKE}" stroke-width="3" />
      `,
    },
    {
      id: "faucet",
      name: "水龙头",
      colors: ["red", "blue", "green"],
      render: (hex) => `
        <rect x="102" y="176" width="76" height="16" rx="6" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="124" y="84" width="36" height="94" rx="8" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M142 88 V52 Q142 30 120 30 H84 Q64 30 64 52 V66" fill="none" stroke="${STROKE}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M142 88 V52 Q142 30 120 30 H84 Q64 30 64 52 V66" fill="none" stroke="${hex}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="54" y="64" width="20" height="12" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="92" y="104" width="40" height="14" rx="7" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <circle cx="92" cy="111" r="11" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M64 84 v8" stroke="#67B7E8" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "hand-soap",
      name: "洗手液",
      colors: ["red", "green", "purple"],
      render: (hex) => `
        <rect x="70" y="84" width="60" height="76" rx="16" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="88" y="64" width="24" height="26" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M112 68 h24 v12 h-20" fill="${hex}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round" />
        <path d="M84 108 h32" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "soap-bar",
      name: "香皂",
      colors: ["red", "blue", "yellow", "green"],
      render: (hex) => `
        <rect x="48" y="78" width="104" height="60" rx="30" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M78 96 q22 -8 44 0" fill="none" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round" />
      `,
    },
    {
      id: "mirror",
      name: "镜子",
      colors: ["blue", "green", "yellow"],
      render: (hex) => `
        <ellipse cx="100" cy="90" rx="46" ry="54" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <ellipse cx="100" cy="90" rx="34" ry="42" fill="#DDEEF5" stroke="${STROKE}" stroke-width="3" />
        <path d="M84 76 q10 -10 22 -6" fill="none" stroke="#FFFFFF" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" />
        <path d="M100 144 v14 M84 160 h32" fill="none" stroke="${STROKE}" stroke-width="6" stroke-linecap="round" />
      `,
    },
    {
      id: "toothbrush",
      name: "牙刷",
      colors: ["red", "blue", "yellow", "green"],
      render: (hex) => `
        <g transform="rotate(-12 100 100)">
          <rect x="34" y="108" width="104" height="18" rx="9" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
          <rect x="130" y="92" width="44" height="34" rx="14" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
          <g stroke="#9AA0A6" stroke-width="4" stroke-linecap="round">
            <path d="M140 92 v-14" /><path d="M150 92 v-14" /><path d="M160 92 v-14" /><path d="M170 92 v-14" />
          </g>
          <path d="M48 117 h18 M72 117 h18" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" />
        </g>
      `,
    },
    {
      id: "tooth-cup",
      name: "牙杯",
      colors: ["red", "yellow", "purple"],
      render: (hex) => `
        <path d="M64 78 h72 l-9 72 a8 8 0 0 1 -8 7 h-38 a8 8 0 0 1 -8 -7 z" fill="${hex}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round" />
        <ellipse cx="100" cy="78" rx="36" ry="9" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
      `,
    },
    {
      id: "towel",
      name: "毛巾",
      colors: ["red", "blue", "green", "orange"],
      render: (hex) => `
        <rect x="20" y="36" width="12" height="12" rx="3" fill="${STROKE}" />
        <circle cx="42" cy="42" r="12" fill="none" stroke="${STROKE}" stroke-width="5" />
        <g transform="rotate(-5 100 100)">
          <rect x="40" y="50" width="128" height="112" rx="12" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
          <path d="M40 78 h128 M40 102 h128 M40 126 h128" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="7" />
          <path d="M150 50 v112" stroke="${STROKE}" stroke-width="2.5" stroke-opacity="0.3" />
        </g>
      `,
    },
    {
      id: "toothpaste",
      name: "牙膏",
      colors: ["blue", "green", "orange"],
      render: (hex) => `
        <rect x="88" y="36" width="24" height="16" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="93" y="52" width="14" height="10" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <path d="M82 62 h36 v76 h-36 z" fill="${hex}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round" />
        <rect x="88" y="88" width="24" height="34" rx="4" fill="#FFFCF4" stroke="${STROKE}" stroke-width="3" />
        <path d="M92 98 h16 M92 106 h16" stroke="${STROKE}" stroke-width="3" stroke-linecap="round" />
        <path d="M84 138 v6 M90 138 v6 M96 138 v6 M102 138 v6 M108 138 v6 M114 138 v6" stroke="${STROKE}" stroke-width="2" />
      `,
    },
    {
      id: "bed",
      name: "床",
      colors: ["red", "blue", "green"],
      render: (hex) => `
        <rect x="38" y="80" width="18" height="66" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="40" y="104" width="120" height="40" rx="8" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="60" y="90" width="36" height="18" rx="6" fill="#FFFFFF" stroke="${STROKE}" stroke-width="4" />
        <path d="M96 104 v40" stroke="${STROKE}" stroke-width="3" />
        <rect x="46" y="144" width="12" height="16" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="142" y="144" width="12" height="16" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
      `,
    },
    {
      id: "table",
      name: "桌子",
      colors: ["yellow", "green", "orange"],
      render: (hex) => `
        <rect x="40" y="86" width="120" height="16" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="52" y="102" width="12" height="58" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="136" y="102" width="12" height="58" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="96" y="102" width="12" height="50" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
      `,
    },
    {
      id: "chair",
      name: "椅子",
      colors: ["blue", "yellow", "green"],
      render: (hex) => `
        <rect x="64" y="44" width="18" height="78" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="64" y="104" width="70" height="16" rx="5" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="68" y="120" width="13" height="42" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="120" y="120" width="13" height="42" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
      `,
    },
    {
      id: "tv",
      name: "电视",
      colors: ["red", "blue", "purple"],
      render: (hex) => `
        <path d="M100 54 L76 26 M100 54 L124 26" fill="none" stroke="${STROKE}" stroke-width="4" stroke-linecap="round" />
        <circle cx="76" cy="26" r="4" fill="${STROKE}" />
        <circle cx="124" cy="26" r="4" fill="${STROKE}" />
        <rect x="36" y="54" width="128" height="86" rx="10" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="46" y="64" width="108" height="56" rx="4" fill="#DDEEF5" stroke="${STROKE}" stroke-width="3" />
        <circle cx="54" cy="130" r="3" fill="${STROKE}" />
        <circle cx="66" cy="130" r="3" fill="${STROKE}" />
        <rect x="84" y="140" width="32" height="10" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="62" y="150" width="76" height="8" rx="4" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
      `,
    },
    {
      id: "door",
      name: "门",
      colors: ["red", "blue", "green", "orange"],
      render: (hex) => `
        <rect x="58" y="42" width="84" height="118" rx="6" fill="${hex}" stroke="${STROKE}" stroke-width="4" />
        <rect x="70" y="56" width="60" height="40" rx="4" fill="none" stroke="${STROKE}" stroke-width="3" />
        <rect x="70" y="106" width="60" height="40" rx="4" fill="none" stroke="${STROKE}" stroke-width="3" />
        <circle cx="128" cy="104" r="5" fill="${STROKE}" />
      `,
    },
  ];

  const makeObject = (itemId, colorId) => {
    const color = COGNITIVE_COLORS.find((c) => c.id === colorId) || COGNITIVE_COLORS[0];
    const item = COGNITIVE_ITEMS.find((i) => i.id === itemId);
    if (!item) {
      return "";
    }

    return `
      <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <g>${item.render(color.hex)}</g>
      </svg>
    `;
  };

  const els = {
    startScreen: document.getElementById("screen-start"),
    menuScreen: document.getElementById("screen-menu"),
    practiceScreen: document.getElementById("screen-practice"),
    startBtn: document.getElementById("start-btn"),
    menuBackBtn: document.getElementById("menu-back-btn"),
    practiceEntryBtn: document.getElementById("practice-entry-btn"),
    cognitivePracticeEntryBtn: document.getElementById("cognitive-practice-entry-btn"),
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
  };

  let queue = [];
  let previousItem = null;
  let currentItem = null;
  let locked = false;
  let lastFocused = null;
  let currentPractice = "emotion";

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function refillQueueEmotion() {
    const firstHalf = shuffle([...EMOTIONS]);
    const secondHalf = shuffle([...EMOTIONS]);

    if (previousItem && previousItem.id && firstHalf[0].id === previousItem.id) {
      const swapAt = firstHalf.findIndex((emotion) => emotion.id !== previousItem.id);
      if (swapAt !== -1) {
        [firstHalf[0], firstHalf[swapAt]] = [firstHalf[swapAt], firstHalf[0]];
      }
    }

    if (secondHalf[0].id === firstHalf[firstHalf.length - 1].id) {
      const swapAt = secondHalf.findIndex(
        (emotion, index) => index > 0 && emotion.id !== firstHalf[firstHalf.length - 1].id,
      );
      if (swapAt !== -1) {
        [secondHalf[0], secondHalf[swapAt]] = [secondHalf[swapAt], secondHalf[0]];
      }
    }

    queue = [...firstHalf, ...secondHalf];
  }

  function refillQueueCognitive() {
    const items = [];
    COGNITIVE_ITEMS.forEach((item) => {
      (item.colors || []).forEach((colorId) => {
        items.push({ type: "cognitive", itemId: item.id, itemName: item.name, colorId });
      });
    });

    shuffle(items);

    if (
      previousItem &&
      previousItem.itemId &&
      items.length > 1 &&
      items[0].itemId === previousItem.itemId &&
      items[0].colorId === previousItem.colorId
    ) {
      const swapAt = items.findIndex(
        (it, idx) => idx > 0 && !(it.itemId === previousItem.itemId && it.colorId === previousItem.colorId),
      );
      if (swapAt !== -1) {
        [items[0], items[swapAt]] = [items[swapAt], items[0]];
      }
    }

    queue = items;
  }

  function refillQueue() {
    if (currentPractice === "cognitive") {
      refillQueueCognitive();
    } else {
      refillQueueEmotion();
    }
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

  function renderCognitiveQuestion(target) {
    const item = COGNITIVE_ITEMS.find((i) => i.id === target.itemId);
    const correct = item ? item.name : target.itemName;

    els.practicePrompt.textContent = "这是什么？";
    els.displayArea.innerHTML = makeObject(target.itemId, target.colorId);
    els.feedback.textContent = "";
    els.answers.innerHTML = "";
    els.answers.classList.remove("answers--two", "answers--one");

    const distractors = shuffle(COGNITIVE_ITEMS.filter((i) => i.id !== target.itemId))
      .slice(0, 2)
      .map((i) => i.name);
    const options = shuffle([correct, ...distractors]);

    options.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-btn";
      button.textContent = label;
      button.addEventListener("click", () => handleCognitiveAnswer(button, label, correct));
      els.answers.appendChild(button);
    });
  }

  function renderEmotionQuestion(target) {
    els.practicePrompt.textContent = "这是什么？";
    els.displayArea.innerHTML = target.face;
    els.feedback.textContent = "";
    els.answers.innerHTML = "";
    els.answers.classList.remove("answers--two", "answers--one");

    const distractors = shuffle(EMOTIONS.filter((emotion) => emotion.id !== target.id)).slice(0, 2);
    const options = shuffle([target, ...distractors]);

    options.forEach((emotion) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-btn";
      button.textContent = emotion.label;
      button.addEventListener("click", () => handleAnswer(button, emotion));
      els.answers.appendChild(button);
    });
  }

  function renderQuestion() {
    if (queue.length === 0) {
      refillQueue();
    }

    const target = queue.shift();
    previousItem = target;
    currentItem = target;
    locked = false;

    if (currentPractice === "cognitive") {
      renderCognitiveQuestion(target);
    } else {
      renderEmotionQuestion(target);
    }
  }

  function showCorrectAnswer() {
    locked = true;
    els.answers.innerHTML = "";
    els.answers.classList.remove("answers--two");
    els.answers.classList.add("answers--one");

    const nextButton = buildNextButton();
    els.answers.appendChild(nextButton);

    els.feedback.textContent = "对了！";
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

  function handleCognitiveAnswer(button, label, correct) {
    if (locked) {
      return;
    }

    if (label === correct) {
      showCorrectAnswer();
      return;
    }

    hideWrongAnswer(button);
  }

  function handleAnswer(button, emotion) {
    if (locked) {
      return;
    }

    if (emotion.id === currentItem.id) {
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
    els.startScreen.hidden = name !== "start";
    els.menuScreen.hidden = name !== "menu";
    els.practiceScreen.hidden = name !== "practice";
    window.scrollTo(0, 0);
  }

  function openMenu() {
    showScreen("menu");
    els.practiceEntryBtn.focus({ preventScroll: true });
  }

  function startSession(type) {
    currentPractice = type === "cognitive" ? "cognitive" : "emotion";
    queue = [];
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
    queue = [];
    previousItem = null;
    currentItem = null;
    locked = false;
    renderQuestion();
    closeSettings(false);
    focusFirstAnswer();
  }

  function goHome() {
    queue = [];
    previousItem = null;
    currentItem = null;
    locked = false;
    closeSettings(false);
    showScreen("start");
    els.startBtn.focus({ preventScroll: true });
  }

  els.startBtn.addEventListener("click", openMenu);
  els.menuBackBtn.addEventListener("click", goHome);
  els.practiceEntryBtn.addEventListener("click", () => startSession("emotion"));
  els.cognitivePracticeEntryBtn.addEventListener("click", () => startSession("cognitive"));
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
