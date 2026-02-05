// Нормализация ans перед сравнением (пример)
export function sendAnswer(userValRaw) {
  if (!state.task) return;

  const val = Number(userValRaw);

  let ans = Number(state.task.ans);
  if (!isFinite(ans)) {
    console.error("Некорректный ans, нормализуем перед сравнением:", state.task.ans);
    ans = 0; // fallback — можно изменить по пожеланию
    state.task.ans = ans;
  }

  const correct = Math.abs(val - ans) <= 0.01; // порог сравнения — можно настроить
  // Дальше логика отметки ответа/сообщения пользователю...
}