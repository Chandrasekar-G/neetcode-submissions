class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length != n-1) return false;

        const graph = Array.from({length: n}, () => []);

        for(const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();

        function dfs(node, parent) {
            if(visited.has(node)) return false;

            visited.add(node);

            for(const neighbour of graph[node]) {
                if(neighbour === parent) continue;

                if(!dfs(neighbour, node)) return false;
            }
            return true;
        }

        if(!dfs(0, -1)) return false;

        return visited.size === n;
    }
}
