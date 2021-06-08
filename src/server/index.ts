// Dotenv (first thing that should run)
require("dotenv").config();

// Imports
import { db } from "./db/db";

async function main() {
  const allUsers = await db.user.findMany({
    include: {
      scripts: true,
    },
  });
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.$disconnect();
  });
