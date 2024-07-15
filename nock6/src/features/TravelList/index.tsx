"use client";

import { hc } from "hono/client";
import { use } from "react";
import { AppType } from "src/app/api/[[...route]]/route";

export const TravelList = () => {
  const travels = use(
    (async () => {
      const client = hc<AppType>("http://localhost:8788");
      const res = await client.api.travels.$get();
      return res.json();
    })()
  );

  return (
    <ul>
      {travels.map((travel) => {
        return (
          <li key={travel.id}>
            <a>{travel.title}</a>
          </li>
        );
      })}
    </ul>
  );
};
