import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { point } from "./point";
import { relations, sql } from "drizzle-orm";

export const shift = sqliteTable("shift", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`CURRENT_TIMESTAMP()`
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdateFn(
    () => new Date()
  ),
  point: integer("point").references(() => point.id, {
    onDelete: "restrict",
    onUpdate: "cascade",
  }),
});

export const shiftRelation = relations(shift, ({ one }) => ({
  point: one(point, { fields: [shift.point], references: [point.id] }),
}));
