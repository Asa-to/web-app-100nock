import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import z from "zod";
import { Bindings } from "../..";
import { todos } from "../../schema";
import { eq } from "drizzle-orm";

export const todosApp = new Hono<{ Bindings: Bindings }>().get(
  "/:id",
  zValidator(
    "param",
    z.object({
      id: z.string().regex(/^\d*$/).transform(Number),
    })
  ),
  async (c) => {
    const { id } = c.req.valid("param");
    const db = drizzle(c.env.DB);
    const data = await db.select().from(todos).where(eq(todos.id, id));
    return c.json(data);
  }
);
