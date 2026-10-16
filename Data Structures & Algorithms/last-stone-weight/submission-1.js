class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
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
        if (this.heap.length === 0) return undefined;
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] =
            [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        // Bubble up: larger value must be above its parent
        while (i > 0) {
            const p = this.parent(i);

            if (this.heap[i] > this.heap[p]) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) return undefined;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        // Bubble down: swap with the larger child
        while (true) {
            let largest = i;
            const left = this.left(i);
            const right = this.right(i);

            if (
                left !== -1 &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right !== -1 &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === i) break;

            this.swap(i, largest);
            i = largest;
        }

        return max;
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxHeap();

        for(const stone of stones) {
            heap.insert(stone);
        }

        while(heap.size() > 1) {
            const first = heap.extractMax();
            const second = heap.extractMax();

            const result = first - second;

            if(result > 0) {
                heap.insert(result);
            }
        }

        return heap.size() > 0 ? heap.peek() : 0;
    }
}
