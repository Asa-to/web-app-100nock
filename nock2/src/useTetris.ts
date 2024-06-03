import { useEffect, useState } from "react";

type Masu = {
  color: "black" | "white";
  isActive: boolean;
};

export const useTetris = () => {
  const [field] = useState<Masu[][]>(
    [...Array(10)].map(() => Array(20).fill("white"))
  );
  const [gameTick, setGameTick] = useState(0);
  const [activeMasus, setActiveMasus] = useState<[[number, number]]>([[0, 0]]);

  useEffect(() => {
    const timer = setInterval(() => {
      setGameTick((t) => Math.min(t + 1, 9));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveMasus([[activeMasus[0][0], activeMasus[0][1] + 1]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameTick]);

  return { field, gameTick };
};
