import { guard } from "~~/database/schema";

export default eventHandler(async () => {
  return useDrizzle().select().from(guard);
});
