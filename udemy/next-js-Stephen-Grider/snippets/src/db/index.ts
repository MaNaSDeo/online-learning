// import { PrismaClient } from "@prisma/client/extension";
import { PrismaClient } from "@/generated/prisma";
/**
 * Here the issue was, in schema.prisma we had
 * --> output   = "../src/generated/prisma" <--
 * so a new folder was getting created inside 'src' i.e. /generated/prisma, so now we are importing from there.
 *
 * 1st. 'npx prisma migrate'
 * 2nd. 'npx prisma migrate dev'
 */

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "Title!",
    code: "const testFunction = () => {}",
  },
});
