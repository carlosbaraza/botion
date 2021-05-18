require("dotenv").config();
import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function main() {
  // const dbs = await notion.databases.list({});
  // console.log(JSON.stringify(dbs, null, 2));

  const query = await notion.databases.query({
    database_id: "6cf88cb0e6fc446dbae227116b7943e9",
  });
  console.log(JSON.stringify(query, null, 2));
}

main();
