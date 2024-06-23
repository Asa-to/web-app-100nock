import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { todos } from "./schema";
import viewApp from "./view";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

const routes = app
  .get("/", async (c) => {
    const db = drizzle(c.env.DB);
    const data = await db.select().from(todos).all();
    return c.json(data);
  })
  .post("/post", async (c) => {
    const db = drizzle(c.env.DB);
    const title = c.req.queries("title")?.[0];
    if (!title) {
      return;
    }
    const data = await db.insert(todos).values({
      title,
    });
    return c.json(data);
  })
  .route("/view", viewApp);

export type AppType = typeof routes;

export default app;
