// src/index.ts
function mOcKcAsE(input, options = {}) {
  const { capitalizeFirst = false } = options;
  return input.split("").map((char, index) => {
    const isEvenIndex = index % 2 === 0;
    if (!capitalizeFirst) {
      return isEvenIndex ? char.toLowerCase() : char.toUpperCase();
    } else {
      return isEvenIndex ? char.toUpperCase() : char.toLowerCase();
    }
  }).join("");
}
export {
  mOcKcAsE
};
//# sourceMappingURL=index.mjs.map