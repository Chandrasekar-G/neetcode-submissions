class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}


class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        
        for(const char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node, index) {

            if(word.length == index) return node.isWord;

            const char = word[index];

            if(char !== ".") {
                if(!node.children[char]) {
                    return false;
                }

                return dfs(node.children[char], index+1);
            }

            for(const child of Object.values(node.children)) {
                if(dfs(child, index+1)) {
                    return true;
                }
            }
            return false;
        }

        return dfs(this.root, 0);
    }
}
