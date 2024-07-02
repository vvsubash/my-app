import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userName: text("name").unique().notNull(),
  secret: text("secret").notNull(),
});
