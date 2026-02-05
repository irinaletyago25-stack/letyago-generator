// Утилита безопасного деления: возвращает null при ошибке
export function safeDivide(numer, denom) {
  if (typeof denom !== "number" || denom === 0 || !isFinite(denom)) {
    return null;
  }
  const res = numer / denom;
  if (!isFinite(res)) return null;
  return res;
}