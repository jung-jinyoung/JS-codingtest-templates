function dfs(node, graph, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  for (let next of graph[node]) {
    dfs(next, graph, visited);
  }
}
