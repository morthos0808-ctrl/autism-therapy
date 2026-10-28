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

  const els = {
    startScreen: document.getElementById("screen-start"),
    menuScreen: document.getElementById("screen-menu"),
    practiceScreen: document.getElementById("screen-practice"),
    startBtn: document.getElementById("start-btn"),
    menuBackBtn: document.getElementById("menu-back-btn"),
    practiceEntryBtn: document.getElementById("practice-entry-btn"),
    settingsBtn: document.getElementById("settings-btn"),
    overlay: document.getElementById("settings-overlay"),
    dialog: document.getElementById("settings-dialog"),
    closeSettingsBtn: document.getElementById("close-settings-btn"),
    restartBtn: document.getElementById("restart-btn"),
    homeBtn: document.getElementById("home-btn"),
    face: document.getElementById("face"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
  };

  let queue = [];
  let previousEmotion = null;
  let currentEmotion = null;
  let locked = false;
  let lastFocused = null;

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function refillQueue() {
    const firstHalf = shuffle([...EMOTIONS]);
    const secondHalf = shuffle([...EMOTIONS]);

    if (previousEmotion && firstHalf[0].id === previousEmotion.id) {
      const swapAt = firstHalf.findIndex((emotion) => emotion.id !== previousEmotion.id);
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

  function renderQuestion() {
    if (queue.length === 0) {
      refillQueue();
    }

    const target = queue.shift();
    previousEmotion = target;
    currentEmotion = target;
    locked = false;

    els.face.innerHTML = target.face;
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

  function handleAnswer(button, emotion) {
    if (locked) {
      return;
    }

    if (emotion.id === currentEmotion.id) {
      locked = true;

      els.answers.innerHTML = "";
      els.answers.classList.remove("answers--two");
      els.answers.classList.add("answers--one");

      const nextButton = document.createElement("button");
      nextButton.id = "next-btn";
      nextButton.type = "button";
      nextButton.className = "next-btn";
      nextButton.textContent = "下一题";
      nextButton.addEventListener("click", nextQuestion);
      els.answers.appendChild(nextButton);

      els.feedback.textContent = "对了！";
      nextButton.focus({ preventScroll: true });
      return;
    }

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

  function startSession() {
    queue = [];
    previousEmotion = null;
    currentEmotion = null;
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
    previousEmotion = null;
    currentEmotion = null;
    locked = false;
    renderQuestion();
    closeSettings(false);
    focusFirstAnswer();
  }

  function goHome() {
    queue = [];
    previousEmotion = null;
    currentEmotion = null;
    locked = false;
    closeSettings(false);
    showScreen("start");
    els.startBtn.focus({ preventScroll: true });
  }

  els.startBtn.addEventListener("click", openMenu);
  els.menuBackBtn.addEventListener("click", goHome);
  els.practiceEntryBtn.addEventListener("click", startSession);
  els.settingsBtn.addEventListener("click", openSettings);
  els.closeSettingsBtn.addEventListener("click", () => closeSettings());
  els.restartBtn.addEventListener("click", restartSession);
  els.homeBtn.addEventListener("click", goHome);

  els.overlay.addEventListener("click", (event) => {
    if (event.target === els.overlay) {
      closeSettings();
    }
  });
})();
