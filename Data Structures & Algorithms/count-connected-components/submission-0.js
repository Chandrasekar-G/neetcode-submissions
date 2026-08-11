class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = Array.from({length: n}, () => []);

        for(const [a,b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();
        let components = 0;

        function dfs(node) {
            visited.add(node);

            for(const neighbour of graph[node]) {
                if(!visited.has(neighbour)) {
                    dfs(neighbour);
                }
            }
        }

        for(let i=0; i<n; i++) {
            if(!visited.has(i)) {
                components++;
                dfs(i);
            }
        }

        return components;
    }
}
