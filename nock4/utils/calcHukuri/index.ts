import { Inputs } from "../../src";

export const calcHukuri = (inputs: Inputs) => {
  let amount = inputs.gankin;

  for (let i = 0; i < inputs.nannenn * 12; i++) {
    amount = (amount + inputs.tumitate) * (1 + inputs.nenri / 100 / 12);
  }

  return amount;
};
