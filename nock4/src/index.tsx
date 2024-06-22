import { render } from "hono/jsx/dom";
import { useState } from "hono/jsx";
import { str2num } from "../utils/str2num";
import { calcHukuri } from "../utils/calcHukuri";

export type Inputs = {
  gankin: number;
  tumitate: number;
  nenri: number;
  nannenn: number;
};

const Main = () => {
  const [inputs, setInputs] = useState<Inputs>({
    gankin: 0,
    tumitate: 0,
    nenri: 0,
    nannenn: 0,
  });

  const hukuri = calcHukuri(inputs);
  const gankin = inputs.gankin + inputs.tumitate * 12 * inputs.nannenn;

  const onChange = (state: keyof typeof inputs) => (e: Event) => {
    const value = (e.currentTarget as unknown as HTMLInputElement).value;
    const num = str2num(value);
    setInputs((v) => ({
      ...v,
      [state]: state === "gankin" || state === "tumitate" ? num * 10000 : num,
    }));
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "grid", gridTemplateColumns: "150px 1fr" }}>
          <label for="元金">元金（万円）</label>
          <input name="元金" pattern="\d*" onChange={onChange("gankin")} />
          <label for="積立金額">積立金額（万円）</label>
          <input
            name="積立金額"
            pattern="\d*"
            onChange={onChange("tumitate")}
          />
          <label for="何年">何年</label>
          <input name="何年" pattern="\d*" onChange={onChange("nannenn")} />
          <label for="年利">年利</label>
          <input name="年利" pattern="\d*" onChange={onChange("nenri")} />
        </div>
      </form>
      <div>
        <p>将来の資産：{Math.floor(hukuri).toLocaleString()}</p>
        <p>元本：{gankin.toLocaleString()}</p>
        <p>運用益：{Math.floor(hukuri - gankin).toLocaleString()}</p>
      </div>
    </>
  );
};

const root = document.getElementById("root");

render(<Main />, root as HTMLElement);
