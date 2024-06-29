import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { handle } from "hono/vercel";
import { NextResponse } from "next/server";

const app = new Hono();

app.use(
  "*",
  basicAuth({
    username: process.env.BASIC_USER as string,
    password: "",
  })
);

app.all("*", (c) => {
  return NextResponse.next();
});

export const middleware = handle(app);
