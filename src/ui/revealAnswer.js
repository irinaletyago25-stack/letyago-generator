export function revealAnswer() {
  if (!state.task) {
    addBubble("<b>Сначала нужно сгенерировать задачу.</b>", "ai");
    return;
  }

  let ans = Number(state.task.ans);
  if (!isFinite(ans)) {
    console.error("Некорректный ans при показе, нормализуем:", state.task.ans);
    ans = 0;
    state.task.ans = ans;
  }

  addBubble("<b>Правильный ответ: " + ans + "</b>", "ai");
}