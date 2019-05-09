/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const checkAllPath = (graph, node) => {
  for (let i in graph) {
      if (i.index+1 !== node && !i.includes(node)) {
          return false;
      }
  }
  return true;
}

var findJudge = function(N, trust) {
  
  // one edge
  if (trust.length === 1) {
      return trust[0][1]
  }
  // bfs, edge list, N -> nodes
  
  // create edge list
  const graph = {};
  
  for (let i = 0; i < N; ++i) {
      graph[i+1] = [];
  }
  
  for (let i = 0; i < trust.length; ++i) {
      graph[trust[i][0]].push(trust[i][1]);
  }
  let judge = -1;
  
  // find possible judge
  for (let i = 1; i <= N; i++) {
      if (graph[i].length === 0) {
          judge = i;
          break;
      }
  }
  
  // check for paths to judge
  if (judge > 0) {
      if (!checkAllPath(graph, judge)) {
          judge = -1;
      }
  }
  return judge;
}