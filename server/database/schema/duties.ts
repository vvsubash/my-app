import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const duty = sqliteTable("duty", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    date: text("date").notNull(),
    shift: text("")
});
