import { getRequestContext } from "@cloudflare/next-on-pages";
import { hc } from "hono/client";
import { use } from "react";
import { AppType } from "src/app/api/[[...route]]/route";
import { btoaForUTF8 } from "src/utils/btoaForUTF8";

export const TravelList = () => {
  const { env } = getRequestContext<{ BASIC_USER: string }>();
  const travels = use(
    (async () => {
      const basicUser = await btoaForUTF8(env.BASIC_USER + ":");
      const client = hc<AppType>(env.BASE_URL ?? "http://localhost:8788", {
        headers: {
          Authorization: `Basic ${basicUser}`,
        },
      });
      const res = await client.api.travels.$get();

      if (res.ok) {
        return res.json();
      }
      return [];
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
