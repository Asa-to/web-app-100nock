export const btoaForUTF8 = async (str: string) => {
  const encoder = new TextEncoder();
  const unit8Arr = encoder.encode(str);
  const unit8Arr2Latin1String = Array.from(unit8Arr)
    .map((byte) => String.fromCharCode(byte))
    .join("");

  return btoa(unit8Arr2Latin1String);
};
