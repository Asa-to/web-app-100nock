"use client";

import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { useEffect, useState } from "react";

export const TravelList = () => {
  const [travels, setTravels] = useState([
    {
      id: "1",
      title: "テスト旅",
      dos: ["1", "2"],
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    },
  ]);

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
