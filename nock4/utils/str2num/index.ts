export const str2num = (str: string) => {
  const num = Number(str);
  if (isNaN(num)) {
    return 0;
  }

  return num;
};
