import { Hono } from "hono";
import { Bindings } from "../..";
import { drizzle } from "drizzle-orm/d1";
import { todos } from "../../schema";

export const createApp = new Hono<{ Bindings: Bindings }>().post(
  "/post",
  async (c) => {
    const db = drizzle(c.env.DB);
    const title = c.req.queries("title")?.[0];
    if (!title) {
      return;
    }
    const data = await db.insert(todos).values({
      title,
    });
    return c.json(data);
  }
);
