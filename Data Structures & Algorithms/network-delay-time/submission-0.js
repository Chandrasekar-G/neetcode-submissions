class Solution {
    networkDelayTime(times, n, k) {
        const graph = Array.from({
            length: n + 1
        }, () => []);

        // Create adjacency list
        for(const [node, neighbour, weight] of times) {
            graph[node].push([neighbour, weight]);
        }
        
        const dist = new Array(n+1).fill(Infinity);
        dist[k] = 0;

        function dfs(node, time) {
            for(const [neighbour, weight] of graph[node]) {
                const newTime = time + weight;

                if(newTime < dist[neighbour]) {
                    dist[neighbour] = newTime;
                    dfs(neighbour, newTime);
                }
            }
        }

        dfs(k, 0);

        let maxTime = 0;

        for(let i=1; i<=n; i++) {
            if(dist[i] == Infinity) return -1;
            maxTime = Math.max(maxTime, dist[i]);
        }

        return maxTime;

    }
}