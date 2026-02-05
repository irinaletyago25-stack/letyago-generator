// Скрипт для массового теста генераторов: запускает каждый генератор несколько раз
import Generators from "../src/generators";

const bad = [];
for (const key of Object.keys(Generators)) {
  for (let i = 0; i < 500; i++) {
    const t = Generators[key]();
    if (!t || typeof t.ans === "undefined" || t.ans === null || !isFinite(Number(t.ans)) || !t.title || !t.text) {
      bad.push({ key, i, t });
      break;
    }
  }
}
console.log("bad generators:", bad);
