import { relations } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { point } from "./point";

export const guard = sqliteTable("guard", {
  id: integer("id", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  name: text("name").notNull(),
  point: integer("point_id")
    .notNull()
    .references(() => point.id, { onDelete: "restrict", onUpdate: "cascade" })
    .default(1),
});

export const guardsRelation = relations(guard, ({ one }) => ({
  point: one(point, { fields: [guard.point], references: [point.id] }),
}));
