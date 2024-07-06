import { DrizzleD1Database } from "drizzle-orm/d1";
import { Hono } from "hono";

type Bindings = {
  DB: DrizzleD1Database;
};

const app = new Hono<{ Bindings: Bindings }>();
