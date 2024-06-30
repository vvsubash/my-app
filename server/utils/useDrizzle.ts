import { drizzle } from "drizzle-orm/d1";

import * as schema from "../database/schema/index";
export { sql, eq, and, or } from "drizzle-orm";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}

export type Guard = typeof schema.guard.$inferSelect;
