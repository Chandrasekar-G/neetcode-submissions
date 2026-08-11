class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        // Create a pre-req Map
        const preMap = Array.from({
            length: numCourses
        }, () => []);

        for(const [course, preReq] of prerequisites) {
            preMap[course].push(preReq);
        }

        const visitSet = new Set();

        function dfs(course) {
            if(visitSet.has(course)) {
                return false;
            }

            if(preMap[course].length === 0) {
                return true;            
            }

            visitSet.add(course);

            for(const pre of preMap[course]) {
                if(!dfs(pre)) {
                    return false;
                }
            }
            visitSet.delete(course);
            preMap[course] = [];
            return true;
        }

        for(let i=0; i<numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
