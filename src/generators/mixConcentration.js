// Пример безопасного генератора mixConcentration
// Возвращает null при невозможности корректного вычисления,
// чтобы newTask мог перегенерировать задачу.
export default function mixConcentration(params = {}) {
  const v1 = Number(params.v1 ?? 31);
  const c1 = Number(params.c1 ?? 13.33);
  const v2 = Number(params.v2 ?? 28);
  const c2 = Number(params.c2 ?? 11.76);

  const m1 = v1 * c1 / 100;
  const m2 = v2 * c2 / 100;

  const mTotal = m1 + m2;
  const vTotal = v1 + v2;

  if (!isFinite(m1) || !isFinite(m2) || !isFinite(mTotal) || !isFinite(vTotal) || vTotal === 0) {
    console.error("mixConcentration: некорректные параметры — перегенерация", { v1, c1, v2, c2, m1, m2, mTotal, vTotal });
    return null;
  }

  let ans = (mTotal / vTotal) * 100;
  ans = Math.round(ans * 10) / 10; // округление до 0.1, ans — number

  const title = "Смешивание растворов";
  const text = `Смешали ${v1} л раствора концентрации ${c1}% и ${v2} л раствора концентрации ${c2}%. Найдите новую концентрацию.`;

  const steps = [
    {
      h: "Масса вещества",
      m: (`m₁ = ${v1}·${c1}/100 = ${m1.toFixed(2)}, m₂ = ${v2}·${c2}/100 = ${m2.toFixed(2)}.`).trim()
    },
    {
      h: "Суммарная масса",
      m: (`Всего вещества: ${m1.toFixed(2)} + ${m2.toFixed(2)} = ${mTotal.toFixed(2)}.<br>Объём: ${v1}+${v2} = ${vTotal}.`).trim()
    },
    {
      h: "Новая концентрация",
      m: (`c = ${mTotal.toFixed(2)}/${vTotal}·100 ≈ <b>${ans}</b>%.`).trim()
    }
  ];

  return { title, text, ans, steps };
}