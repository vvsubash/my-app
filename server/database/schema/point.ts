import { relations } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { guard } from "./guard";

export const point = sqliteTable("point", {
  id: integer("id", { mode: "number" }).primaryKey({
    autoIncrement: true,
    onConflict: "fail",
  }),
  name: text("name").notNull().unique(),
});

export const pointRelation = relations(point, ({ many }) => ({
  guards: many(guard),
}));
