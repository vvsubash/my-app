import { user } from "../../database/schema/index";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return useDrizzle().select()
})
