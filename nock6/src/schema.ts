import { sql } from "drizzle-orm/sql";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const travels = sqliteTable("travels", {
  id: text("id").primaryKey().unique(),
  title: text("title").notNull(),
  start: text("date").notNull(),
  end: text("date").notNull(),
  tasks: text("task")
    .notNull()
    .default(sql`(json_array())`),
});
