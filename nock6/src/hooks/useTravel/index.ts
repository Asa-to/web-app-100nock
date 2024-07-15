"use client";

import { hc } from "hono/client";
import { use, useState } from "react";
import { AppType } from "src/app/api/[[...route]]/route";

export const useTravels = () => {
  const client = hc<AppType>("http://localhost:8788");

  const [travels, setTravels] = useState<
    {
      id: string;
      title: string;
      start: string;
      end: string;
      tasks: string;
    }[]
  >([]);

  const doing = async () => {
    const res = await client.api.travels.$get();
    return res.json();
  };

  const data = use(doing());
  setTravels(data);

  return {
    travels,
  };
};
