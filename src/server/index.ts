require("dotenv").config();
//
import { notion } from "./notion";
import { getBlocks } from "./notion/utils";

async function main() {
  // Get databases
  const dbs = await notion.databases.list({});
  console.log(JSON.stringify(dbs, null, 2));

  // Get database pages
  const query = await notion.databases.query({
    database_id: "6cf88cb0-e6fc-446d-bae2-27116b7943e9",
  });
  console.log(JSON.stringify(query, null, 2));

  // Search notion
  console.log(JSON.stringify(await notion.search({}), null, 2));

  // Get page
  console.log(
    JSON.stringify(
      await notion.pages.retrieve({
        page_id: "01ec02e3-b936-46c4-86e9-743311560a4f",
      }),
      null,
      2
    )
  );

  // Get blocks
  console.log(
    JSON.stringify(
      await getBlocks("01ec02e3-b936-46c4-86e9-743311560a4f"),
      null,
      2
    )
  );
}

main();
