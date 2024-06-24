import { Hono } from "hono";
import viewApp from "./view";
import { todosApp } from "./api/todos";
import { createApp } from "./api/todos/create";

export type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>()
  .route("/todos/create", createApp)
  .route("/todos", todosApp)
  .route("/view", viewApp);

export type AppType = typeof app;

export default app;
