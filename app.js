(() => {
  \"use strict\";
  const makeFace = (features) => \
    <svg viewBox=\"0 0 200 200\" aria-hidden=\"true\" focusable=\"false\">
      <circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#ECEEDC\" />
      <circle cx=\"100\" cy=\"100\" r=\"74\" fill=\"#FFFCF4\" stroke=\"#4A4433\" stroke-width=\"4\" />
      <g fill=\"none\" stroke=\"#4A4433\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">
        \
      </g>
    </svg>
  \;
  const EMOTIONS = [
    { id: \"happy\", label: \"开心\", face: makeFace(\<path d=\"M62 92 Q73 80 84 92\" /><path d=\"M116 92 Q127 80 138 92\" /><path d=\"M64 121 Q100 154 136 121\" /><ellipse cx=\"56\" cy=\"118\" rx=\"10\" ry=\"6\" fill=\"#E4BFA6\" stroke=\"none\" opacity=\"0.7\" /><ellipse cx=\"144\" cy=\"118\" rx=\"10\" ry=\"6\" fill=\"#E4BFA6\" stroke=\"none\" opacity=\"0.7\" />\) },
    { id: \"sad\", label: \"难过\", face: makeFace(\<path d=\"M58 76 Q71 64 84 70\" /><path d=\"M116 70 Q129 64 142 76\" /><circle cx=\"73\" cy=\"94\" r=\"4.5\" fill=\"#4A4433\" stroke=\"none\" /><circle cx=\"127\" cy=\"94\" r=\"4.5\" fill=\"#4A4433\" stroke=\"none\" /><path d=\"M73 106 C69 113 69 117 73 119 C77 117 77 113 73 106 Z\" fill=\"#D8D2BD\" stroke=\"#4A4433\" stroke-width=\"2.5\" /><path d=\"M68 141 Q100 113 132 141\" />\) },
    { id: \"angry\", label: \"生气\", face: makeFace(\<path d=\"M58 72 L84 82\" /><path d=\"M142 72 L116 82\" /><circle cx=\"73\" cy=\"95\" r=\"4.5\" fill=\"#4A4433\" stroke=\"none\" /><circle cx=\"127\" cy=\"95\" r=\"4.5\" fill=\"#4A4433\" stroke=\"none\" /><path d=\"M66 142 Q100 116 134 142\" />\) },
    { id: \"nervous\", label: \"紧张\", face: makeFace(\<path d=\"M58 74 Q71 62 84 74\" /><path d=\"M116 74 Q129 62 142 74\" /><circle cx=\"73\" cy=\"95\" r=\"5\" fill=\"#4A4433\" stroke=\"none\" /><circle cx=\"127\" cy=\"95\" r=\"5\" fill=\"#4A4433\" stroke=\"none\" /><path d=\"M66 132 q8.5 -9 17 0 t17 0 t17 0 t17 0\" /><path d=\"M156 64 C150 74 150 80 156 83 C162 80 162 74 156 64 Z\" fill=\"#D8D2BD\" stroke=\"#4A4433\" stroke-width=\"2.5\" />\) },
  ];
  const COGNITIVE_COLORS = [
    { id: \"red\", name: \"红色\", hex: \"#E85D5D\" },
    { id: \"blue\", name: \"蓝色\", hex: \"#5D7FE8\" },
    { id: \"yellow\", name: \"黄色\", hex: \"#F2D77C\" },
    { id: \"green\", name: \"绿色\", hex: \"#7FC97F\" },
    { id: \"orange\", name: \"橙色\", hex: \"#F4A261\" },
    { id: \"purple\", name: \"紫色\", hex: \"#B388EB\" },
  ];
  const COGNITIVE_ITEMS = [
    { id: \"apple\", name: \"苹果\", colors: [\"red\", \"green\", \"yellow\"] },
    { id: \"ball\", name: \"球\", colors: [\"red\", \"blue\", \"yellow\", \"green\"] },
    { id: \"block\", name: \"方块\", colors: [\"red\", \"blue\", \"yellow\", \"green\"] },
    { id: \"star\", name: \"星星\", colors: [\"yellow\", \"orange\", \"red\", \"purple\"] },
  ];
  const makeObject = (itemId, colorId) => {
    const color = COGNITIVE_COLORS.find((c) => c.id === colorId) || COGNITIVE_COLORS[0];
    const item = COGNITIVE_ITEMS.find((i) => i.id === itemId);
    if (!item) return \"\";
    if (item.id === \"apple\") {
      return \<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#ECEEDC\" /><circle cx=\"100\" cy=\"100\" r=\"74\" fill=\"#FFFCF4\" stroke=\"#4A4433\" stroke-width=\"4\" /><g><ellipse cx=\"100\" cy=\"110\" rx=\"38\" ry=\"42\" fill=\"\\" stroke=\"#4A4433\" stroke-width=\"4\" /><path d=\"M100 68 Q110 52 98 48 Q90 58 100 68 Z\" fill=\"#7FC97F\" stroke=\"#4A4433\" stroke-width=\"3\" /></g></svg>\;
    } else if (item.id === \"ball\") {
      return \<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#ECEEDC\" /><circle cx=\"100\" cy=\"100\" r=\"74\" fill=\"#FFFCF4\" stroke=\"#4A4433\" stroke-width=\"4\" /><g><circle cx=\"100\" cy=\"110\" r=\"42\" fill=\"\\" stroke=\"#4A4433\" stroke-width=\"4\" /></g></svg>\;
    } else if (item.id === \"block\") {
      return \<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#ECEEDC\" /><circle cx=\"100\" cy=\"100\" r=\"74\" fill=\"#FFFCF4\" stroke=\"#4A4433\" stroke-width=\"4\" /><g><rect x=\"62\" y=\"72\" width=\"76\" height=\"76\" rx=\"8\" fill=\"\\" stroke=\"#4A4433\" stroke-width=\"4\" /></g></svg>\;
    } else if (item.id === \"star\") {
      return \<svg viewBox=\"0 0 200 200\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#ECEEDC\" /><circle cx=\"100\" cy=\"100\" r=\"74\" fill=\"#FFFCF4\" stroke=\"#4A4433\" stroke-width=\"4\" /><g><path d=\"M100 62 L111 92 L143 92 L117 112 L127 142 L100 122 L73 142 L83 112 L57 92 L89 92 Z\" fill=\"\\" stroke=\"#4A4433\" stroke-width=\"4\" stroke-linejoin=\"round\" /></g></svg>\;
    }
    return \"\";
  };
  const els = {
    startScreen: document.getElementById(\"screen-start\"),
    menuScreen: document.getElementById(\"screen-menu\"),
    practiceScreen: document.getElementById(\"screen-practice\"),
    startBtn: document.getElementById(\"start-btn\"),
    menuBackBtn: document.getElementById(\"menu-back-btn\"),
    practiceEntryBtn: document.getElementById(\"practice-entry-btn\"),
    cognitivePracticeEntryBtn: document.getElementById(\"cognitive-practice-entry-btn\"),
    settingsBtn: document.getElementById(\"settings-btn\"),
    overlay: document.getElementById(\"settings-overlay\"),
    dialog: document.getElementById(\"settings-dialog\"),
    closeSettingsBtn: document.getElementById(\"close-settings-btn\"),
    restartBtn: document.getElementById(\"restart-btn\"),
    homeBtn: document.getElementById(\"home-btn\"),
    displayArea: document.getElementById(\"display-area\"),
    answers: document.getElementById(\"answers\"),
    feedback: document.getElementById(\"feedback\"),
    practicePrompt: document.getElementById(\"practice-prompt\"),
  };
  let queue = [];
  let previousItem = null;
  let currentItem = null;
  let locked = false;
  let lastFocused = null;
  let currentPractice = \"emotion\";
  function shuffle(items) { for (let i = items.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; } return items; }
  function refillQueueEmotion() { const firstHalf = shuffle([...EMOTIONS]); const secondHalf = shuffle([...EMOTIONS]); if (previousItem && previousItem.id && firstHalf[0].id === previousItem.id) { const swapAt = firstHalf.findIndex((e) => e.id !== previousItem.id); if (swapAt !== -1) { [firstHalf[0], firstHalf[swapAt]] = [firstHalf[swapAt], firstHalf[0]]; } } if (secondHalf[0].id === firstHalf[firstHalf.length - 1].id) { const swapAt = secondHalf.findIndex((e, idx) => idx > 0 && e.id !== firstHalf[firstHalf.length - 1].id); if (swapAt !== -1) { [secondHalf[0], secondHalf[swapAt]] = [secondHalf[swapAt], secondHalf[0]]; } } queue = [...firstHalf, ...secondHalf]; }
  function refillQueueCognitive() { const items = []; COGNITIVE_ITEMS.forEach((it) => { (it.colors || []).forEach((c) => { items.push({ type: \"cognitive\", itemId: it.id, itemName: it.name, colorId: c }); }); }); shuffle(items); if (previousItem && previousItem.itemId && items.length > 1 && items[0].itemId === previousItem.itemId && items[0].colorId === previousItem.colorId) { const swapAt = items.findIndex((it, idx) => idx > 0 && !(it.itemId === previousItem.itemId && it.colorId === previousItem.colorId)); if (swapAt !== -1) { [items[0], items[swapAt]] = [items[swapAt], items[0]]; } } queue = items; }
  function refillQueue() { if (currentPractice === \"cognitive\") { refillQueueCognitive(); } else { refillQueueEmotion(); } }
  function renderQuestion() { if (queue.length === 0) { refillQueue(); } const target = queue.shift(); previousItem = target; currentItem = target; locked = false; if (currentPractice === \"cognitive\") { if (els.practicePrompt) els.practicePrompt.textContent = \"这是什么颜色？\"; if (els.displayArea) { els.displayArea.innerHTML = makeObject(target.itemId, target.colorId); els.displayArea.className = \"face\"; } if (els.feedback) els.feedback.textContent = \"\"; if (els.answers) { els.answers.innerHTML = \"\"; els.answers.classList.remove(\"answers--two\", \"answers--one\"); } const color = COGNITIVE_COLORS.find((c) => c.id === target.colorId); const correct = color ? color.name : target.colorId; const distractors = shuffle(COGNITIVE_COLORS.filter((c) => c.id !== target.colorId)).slice(0, 2).map((c) => c.name); const options = shuffle([correct, ...distractors]); options.forEach((label) => { const b = document.createElement(\"button\"); b.type = \"button\"; b.className = \"answer-btn\"; b.textContent = label; b.addEventListener(\"click\", () => handleCognitiveAnswer(b, label, correct)); if (els.answers) els.answers.appendChild(b); }); return; } if (els.practicePrompt) els.practicePrompt.textContent = \"这是什么？\"; if (els.displayArea) { els.displayArea.innerHTML = target.face; els.displayArea.className = \"face\"; } if (els.feedback) els.feedback.textContent = \"\"; if (els.answers) { els.answers.innerHTML = \"\"; els.answers.classList.remove(\"answers--two\", \"answers--one\"); } const distractors = shuffle(EMOTIONS.filter((e) => e.id !== target.id)).slice(0, 2); const options = shuffle([target, ...distractors]); options.forEach((emotion) => { const b = document.createElement(\"button\"); b.type = \"button\"; b.className = \"answer-btn\"; b.textContent = emotion.label; b.addEventListener(\"click\", () => handleAnswer(b, emotion)); if (els.answers) els.answers.appendChild(b); }); }
  function handleCognitiveAnswer(button, label, correct) { if (locked) return; if (label === correct) { locked = true; if (els.answers) { els.answers.innerHTML = \"\"; els.answers.classList.remove(\"answers--two\"); els.answers.classList.add(\"answers--one\"); const nb = document.createElement(\"button\"); nb.id = \"next-btn\"; nb.type = \"button\"; nb.className = \"next-btn\"; nb.textContent = \"下一题\"; nb.addEventListener(\"click\", nextQuestion); els.answers.appendChild(nb); } if (els.feedback) els.feedback.textContent = \"对了！\"; const nb2 = document.getElementById(\"next-btn\"); if (nb2) nb2.focus({ preventScroll: true }); return; } button.classList.add(\"is-hidden\"); button.disabled = true; const rem = Array.from((els.answers ? els.answers.children : [])).filter((c) => !c.classList.contains(\"is-hidden\")); if (els.answers) { if (rem.length === 1) { els.answers.classList.remove(\"answers--two\"); els.answers.classList.add(\"answers--one\"); } else if (rem.length === 2) { els.answers.classList.remove(\"answers--one\"); els.answers.classList.add(\"answers--two\"); } } if (els.feedback) els.feedback.textContent = \"没关系，再试一次\"; }
  function handleAnswer(button, emotion) { if (locked) return; if (emotion.id === currentItem.id) { locked = true; if (els.answers) { els.answers.innerHTML = \"\"; els.answers.classList.remove(\"answers--two\"); els.answers.classList.add(\"answers--one\"); const nb = document.createElement(\"button\"); nb.id = \"next-btn\"; nb.type = \"button\"; nb.className = \"next-btn\"; nb.textContent = \"下一题\"; nb.addEventListener(\"click\", nextQuestion); els.answers.appendChild(nb); } if (els.feedback) els.feedback.textContent = \"对了！\"; const nb2 = document.getElementById(\"next-btn\"); if (nb2) nb2.focus({ preventScroll: true }); return; } button.classList.add(\"is-hidden\"); button.disabled = true; const rem = Array.from((els.answers ? els.answers.children : [])).filter((c) => !c.classList.contains(\"is-hidden\")); if (els.answers) { if (rem.length === 1) { els.answers.classList.remove(\"answers--two\"); els.answers.classList.add(\"answers--one\"); } else if (rem.length === 2) { els.answers.classList.remove(\"answers--one\"); els.answers.classList.add(\"answers--two\"); } } if (els.feedback) els.feedback.textContent = \"没关系，再试一次\"; }
  function focusFirstAnswer() { const f = els.answers && els.answers.querySelector(\".answer-btn:not(.is-hidden):not(:disabled)\"); if (f) f.focus({ preventScroll: true }); }
  function showScreen(n) { if (els.startScreen) els.startScreen.hidden = n !== \"start\"; if (els.menuScreen) els.menuScreen.hidden = n !== \"menu\"; if (els.practiceScreen) els.practiceScreen.hidden = n !== \"practice\"; window.scrollTo(0, 0); }
  function openMenu() { showScreen(\"menu\"); if (els.practiceEntryBtn) els.practiceEntryBtn.focus({ preventScroll: true }); }
  function startSession(t) { currentPractice = t === \"cognitive\" ? \"cognitive\" : \"emotion\"; queue = []; previousItem = null; currentItem = null; locked = false; renderQuestion(); showScreen(\"practice\"); focusFirstAnswer(); }
  function nextQuestion() { renderQuestion(); focusFirstAnswer(); }
  function openSettings() { if (!els.overlay || !els.overlay.hidden) return; lastFocused = document.activeElement; if (els.overlay) els.overlay.hidden = false; if (els.startScreen) els.startScreen.inert = true; if (els.menuScreen) els.menuScreen.inert = true; if (els.practiceScreen) els.practiceScreen.inert = true; if (els.settingsBtn) els.settingsBtn.setAttribute(\"aria-expanded\", \"true\"); if (els.closeSettingsBtn) els.closeSettingsBtn.focus({ preventScroll: true }); document.addEventListener(\"keydown\", handleDialogKeydown); }
  function closeSettings(r = true) { if (!els.overlay || els.overlay.hidden) return; if (els.overlay) els.overlay.hidden = true; if (els.startScreen) els.startScreen.inert = false; if (els.menuScreen) els.menuScreen.inert = false; if (els.practiceScreen) els.practiceScreen.inert = false; if (els.settingsBtn) els.settingsBtn.setAttribute(\"aria-expanded\", \"false\"); document.removeEventListener(\"keydown\", handleDialogKeydown); if (r) { const ft = lastFocused instanceof HTMLElement ? lastFocused : (els.settingsBtn || els.startBtn); if (ft) ft.focus({ preventScroll: true }); } }
  function handleDialogKeydown(e) { if (e.key === \"Escape\") { e.preventDefault(); closeSettings(); return; } if (e.key !== \"Tab\") return; if (!els.dialog) return; const fs = Array.from(els.dialog.querySelectorAll(\"button:not(:disabled)\")); if (fs.length === 0) return; const f = fs[0], l = fs[fs.length - 1]; if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); } else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); } }
  function restartSession() { queue = []; previousItem = null; currentItem = null; locked = false; renderQuestion(); closeSettings(false); focusFirstAnswer(); }
  function goHome() { queue = []; previousItem = null; currentItem = null; locked = false; closeSettings(false); showScreen(\"start\"); if (els.startBtn) els.startBtn.focus({ preventScroll: true }); }
  if (els.startBtn) els.startBtn.addEventListener(\"click\", openMenu);
  if (els.menuBackBtn) els.menuBackBtn.addEventListener(\"click\", goHome);
  if (els.practiceEntryBtn) els.practiceEntryBtn.addEventListener(\"click\", () => startSession(\"emotion\"));
  if (els.cognitivePracticeEntryBtn) els.cognitivePracticeEntryBtn.addEventListener(\"click\", () => startSession(\"cognitive\"));
  if (els.settingsBtn) els.settingsBtn.addEventListener(\"click\", openSettings);
  if (els.closeSettingsBtn) els.closeSettingsBtn.addEventListener(\"click\", () => closeSettings());
  if (els.restartBtn) els.restartBtn.addEventListener(\"click\", restartSession);
  if (els.homeBtn) els.homeBtn.addEventListener(\"click\", goHome);
  if (els.overlay) { els.overlay.addEventListener(\"click\", (e) => { if (e.target === els.overlay) closeSettings(); }); }
})();