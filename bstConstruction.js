// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    if (value < this.value) {
      // is left null?
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  remove(valueToRemove, parent = null) {
    //removeRightMinimum
    // find the node you want to remove.

    if (valueToRemove < this.value) {
      //traverse to left
      if (this.left !== null) {
        this.left.remove(valueToRemove, this);
      }
    } else if (valueToRemove > this.value) {
      //traverse to left
      if (this.right !== null) {
        this.right.remove(valueToRemove, this);
      }
    } else {
      //node is found

      if (this.left !== null && this.right !== null) {
        // node still have both left and right children
        // go search minimum value of its right node
        this.value = this.right.getMinValue(); // replace current with right min value
        this.right.remove(this.value, this); // delete right min value
      } else if (parent === null) {
        // root node - and either left or right is null.
        // 3 condition if i am root node.

        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right; // take the right value first, before left gets replaced...
          this.left = this.left.left; // then do this
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // deleting the only root node, do nothing or delete bst (discuss the requirement)
        }
      } else if (parent.left === this) {
        // `no child check` above, means i am LEAF node on left
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        // `no child check` above, means i am LEAF node on right
        parent.right = this.left !== null ? this.left : this.right;
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

// Do not edit the line below.
exports.BST = BST;
