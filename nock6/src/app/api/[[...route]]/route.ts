import { getRequestContext } from "@cloudflare/next-on-pages";
import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { travels } from "src/schema";

type Bindings = {
  DB: DrizzleD1Database;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

const route = app
  .get("/travels", async (c) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const result = await db.select().from(travels).all();

    return c.json(result);
  })
  .post("add", async (c) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const result = await db.insert(travels).values({
      id: "test",
      title: "test",
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    });

    return c.json(result);
  })
  .get("/check", (c) => {
    return c.text("Hello Hono！");
  });

export type AppType = typeof route;

export const GET = handle(app);

export const POST = handle(app);

export const runtime = "edge";
