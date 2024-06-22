export const range = (len: number) => {
  if (len < 0) {
    throw new Error("自然数を入れてくれや");
  }

  return [...Array(len)].map((_, i) => i);
};
