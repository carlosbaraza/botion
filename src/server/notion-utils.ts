import { notion } from "./notion";

export async function getBlocks(blockId: string): Promise<any> {
  const blocks = await notion.blocks.children.list({
    block_id: blockId,
  });
  const bs = await Promise.all(
    blocks.results.map(async (block) => {
      if (!block.has_children) return block;
      return {
        ...block,
        children: await getBlocks(block.id),
      };
    })
  );
  return bs;
}
