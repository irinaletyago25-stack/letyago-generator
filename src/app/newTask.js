// Вставить в функцию newTask — фильтр/перегенерация после генерации задачи
export function newTask(key) {
  state.currentKey = key;
  state.task = Generators[key]();

  let tries = 0;
  while (
    (
      !state.task ||
      typeof state.task.ans === "undefined" ||
      state.task.ans === null ||
      !isFinite(Number(state.task.ans)) ||
      !state.task.title ||
      !state.task.text
    ) &&
    tries < 5
  ) {
    console.error("Перегенерация некорректной задачи:", state.task, "key:", key, "try:", tries + 1);
    state.task = Generators[key]();
    tries++;
  }

  // Финальная нормализация ans
  state.task.ans = Number(state.task.ans);
  if (!isFinite(state.task.ans)) {
    console.error("После перегенерации ans некорректен, ставим 0:", state.task && state.task.ans);
    state.task.ans = 0;
  }

  // ... существующая логика рендеринга задачи
}