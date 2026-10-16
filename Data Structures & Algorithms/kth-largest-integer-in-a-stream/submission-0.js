class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i-1)/2);
    }

    left(i) {
        const index = 2 * i + 1;
        return index < this.heap.length ? index : -1;
    }

    right(i) {
        const index = 2 * i + 2;
        return index < this.heap.length ? index : -1;
    }

    peek() {
        if(this.heap.length == 0) return undefined;
        return this.heap[0];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }


    insert(val) {
        // Insert at the end of array
        // Compare with parent and swap if parent is greater
        this.heap.push(val);
        let i = this.heap.length - 1;
        
        while(i > 0) {
            const p = this.parent(i);
            if(this.heap[p] > this.heap[i]) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }

    }

    extractMin() {
        if(this.heap.length <= 0) return undefined;
        if(this.heap.length == 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();

        // compare i with childeren, sift down
        let i = 0;
        while(true) {
            let smallest = i;
            let left = this.left(i);
            let right = this.right(i);

            if(left !== -1 && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if(right !== -1 && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            // If parent is alreadyt the smallest break
            if(smallest == i) break;

            this.swap(i, smallest);
            i = smallest;;
        }

        return min;
    }
 }

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();

        for(const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.insert(val);

        if(this.heap.heap.length > this.k) {
            this.heap.extractMin();
        }

        return this.heap.peek();
    }
}
