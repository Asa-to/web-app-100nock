import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { handle } from "hono/vercel";
import { NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

const app = new Hono();

const { env } = getRequestContext<{ BASIC_USER: string }>();

app.use(
  "*",
  basicAuth({
    username: env.BASIC_USER,
    password: "",
  })
);

app.all("*", (c) => {
  return NextResponse.next({ request: c.req.raw });
});

export const middleware = handle(app);
