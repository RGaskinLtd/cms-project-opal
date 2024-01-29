export function blocksToText(blocks: any[], opts = {}): any {
  const options = {nonTextBehavior: 'remove', ...opts}
  return blocks
    .map((block: { _type: string; children: any[] }) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map((child) => child.text).join('')
    })
    .join('\n\n')
}
