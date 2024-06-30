import { guard } from "../../database/schema/index";

export default eventHandler(async () => {
  return useDrizzle().select().from(guard);
});
