class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.set(key, [...this.keyStore.get(key), [value, timestamp]]);        
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const entries = this.keyStore.get(key);

        if(!entries) return "";

        let left = 0;
        let right = entries.length - 1;
        let result = "";

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [val, time] = entries[mid];

            if(time <= timestamp) {
                result = val;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
