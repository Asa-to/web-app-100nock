import { getRequestContext } from "@cloudflare/next-on-pages";
import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { travels } from "src/schema";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { v7 as uuid } from "uuid";

type Bindings = {
  DB: DrizzleD1Database;
};

const addSchema = z.object({
  title: z.string(),
  start: z.string(),
  end: z.string(),
});

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

const route = app
  .get("/travels", async (c) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const result = await db.select().from(travels).all();

    return c.json(result);
  })
  .post("/add", zValidator("form", addSchema), async (c) => {
    const { env } = getRequestContext();
    const db = drizzle(env.DB);
    const formData = c.req.valid("form");
    const id = uuid();
    const result = await db.insert(travels).values({
      id,
      ...formData,
    });

    return c.json(result, 200);
  });

export type AppType = typeof route;

export const GET = handle(app);

export const POST = handle(app);

export const runtime = "edge";
