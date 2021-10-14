const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {



  getUnderlyingList() {
    return this.queue
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value)
    } else {
      let current = this.queue
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    let result = this.queue.value
    if (this.queue.next) {
      let nextNode = this.queue.next
      this.queue.value = nextNode.value
      this.queue.next = nextNode.next
    } else {
      this.queue.value = null
    }
    return result
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}
