const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.rootStart = null
  }

  root() {
    console.log(this.rootStart)
    return this.rootStart
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.rootStart = addWithInner(this.rootStart, data)

    function addWithInner(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addWithInner(node.left, data)
      } else {
        node.right = addWithInner(node.right, data)
      }

      return node
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return searchWithInner(this.rootStart, data)

    function searchWithInner(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return searchWithInner(node.left, data)
      } else {
        return searchWithInner(node.right, data)
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return findWithInner(this.rootStart, data)

    function findWithInner(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return findWithInner(node.left, data)
      } else {
        return findWithInner(node.right, data)
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootStart = removeWithInner(this.rootStart, data)


    function removeWithInner(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeWithInner(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeWithInner(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let maxLeft = node.left
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }
        node.data = maxLeft.data

        node.left = removeWithInner(node.left, maxLeft.data)

        return node
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootStart) {
      return undefined
    }

    let node = this.rootStart

    while (node.left) {
      node = node.left
    }

    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootStart) {
      return undefined
    }

    let node = this.rootStart

    while (node.right) {
      node = node.right
    }

    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}