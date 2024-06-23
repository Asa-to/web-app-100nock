import { hc } from "hono/client";
import { AppType } from ".";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const client = hc<AppType>("http://localhost:8787");

  const res = await client.index.$get();
  const data = await res.json();

  return c.html(data[0].title);
});

export default app;
