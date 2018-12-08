parseNode = (stream, state = { cursor: 0, total: 0 }) => {
  const children = stream[state.cursor++];
  const metadata = stream[state.cursor++];
  const node = { children: [], metadata: [], value: 0 };
  for (let x = 0; x < children; x++) { node.children.push(parseNode(stream, state)); }
  for (let x = 0; x < metadata; x++) { node.metadata.push(stream[state.cursor++]); }
  node.value = children ? node.metadata.map(m => node.children[m - 1]).map(n => n ? n.value : 0).reduce((p, c) => p + c, 0) : sumMetadata(node);
  return node;
}

sumMetadata = node => node.metadata.reduce((p, c) => p + c, 0) + node.children.reduce((p, c) => p + sumMetadata(c), 0);

module.exports = {
  parseNode,
  sumMetadata
}