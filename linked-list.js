function createLinkedList(name) {
  return {
    name,
    head: null,

    render() {
      // Empty and refill wrapper element
      const container = document.querySelector(`.${this.name.replaceAll(" ","-")}`);

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const name = document.createElement("h2");
      name.textContent = this.name;

      const data = document.createElement("ul");

      const size = document.createElement("li");
      size.textContent = `Size: ${this.getSize()}`;

      const head = document.createElement("li");
      head.textContent = `Head: ${this.getHead()}`;

      const tail = document.createElement("li");
      tail.textContent = `Tail: ${this.getTail()}`;

      const index = document.createElement("li");
      const randomIndex = Math.round(Math.random() * (this.getSize() - 1));
      index.textContent = `At index [${randomIndex}]: ${this.getItem(randomIndex)}`;

      const contains = document.createElement("li");
      const randomNumber = Math.round(Math.random() * 10000).toString();
      contains.textContent = this.contains(randomNumber);
      
      data.append(size, head, tail, index, contains);

      const prependButton = document.createElement("button");
      prependButton.textContent = "Prepend new node";
      prependButton.addEventListener("click", () => {
        this.prependNode(Date.now().toString().slice(-4));
        this.render();
      })

      const appendAtButton = document.createElement("button");
      appendAtButton.textContent = `Append node at [${randomIndex}]`;
      appendAtButton.addEventListener("click", () => {
        this.appendNodeAt(Date.now().toString().slice(-4), randomIndex);
        this.render();
      })

      const appendButton = document.createElement("button");
      appendButton.textContent = "Append new node";
      appendButton.addEventListener("click", () => {
        this.appendNode(Date.now().toString().slice(-4));
        this.render();
      })

      const popButton = document.createElement("button");
      popButton.textContent = "Pop last node";
      popButton.addEventListener("click", () => {
        this.popNode();
        this.render();
      })

      const removeAtButton = document.createElement("button");
      removeAtButton.textContent = `Remove node at [${randomIndex}]`;
      removeAtButton.addEventListener("click", () => {
        this.removeNodeAt(randomIndex);
        this.render();
      })

      container.append(name, data, prependButton, appendAtButton, appendButton, popButton, removeAtButton);

      // Add all nodes
      let next = this.head;
      let counter = 0;
      while (next !== null) {
        const childNode = document.createElement("div");
        childNode.setAttribute("class", "child-node");
        childNode.textContent = `[${counter}] ${next.value}`;

        container.append(childNode);
        next = next.nextNode;
        counter += 1;
      };
    },

    prependNode(value = null) {
      const newNode = createNode(value, this.head);
      this.head = newNode;
    },

    appendNode(value = null) {
      const newNode = createNode(value, null);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let next = this.head;
        while (next.nextNode !== null) {
          next = next.nextNode;
        }
        next.nextNode = newNode;
      }
    },

    popNode() {
      let next = this.head;
      if (next === null) return;
      while (next.nextNode.nextNode !== null) {
        next = next.nextNode;
      }
      next.nextNode = null;
    },

    appendNodeAt(value, index) {
      let next = this.head;
      for (let i=0; i<index-1; i++) {
        next = next.nextNode;
      }
      const newNode = createNode(value, next.nextNode);
      next.nextNode = newNode;
    },

    removeNodeAt(index) {
      let next = this.head;
      for (let i=0; i<index-1; i++) {
        next = next.nextNode;
      }
      next.nextNode = next.nextNode.nextNode;

    },

    getSize() {
      let size = 0;
      let next = this.head;
      while (next !== null) {
        next = next.nextNode;
        size += 1;
      }
      return size;
    },

    getHead() {
      if (this.head === null) {
        return null;
      } else {
        return this.head.value;
      }
    },

    getTail() {
      if (this.head === null) return null;

      let next = this.head;
      while (next.nextNode !== null) {
        next = next.nextNode;
      }
      return next.value;
    },

    getItem(index) {
      let next = this.head;
      for (let i=0; i<index; i++) {
        next = next.nextNode;
      }
      if (next === null) return null;
      return next.value || null;
    },

    contains(searchValue) {
      let index = 0;
      let next = this.head;
      if (next !== null) {
        while (next !== null) {
          if (next.value === searchValue) return `Contains ${searchValue} at [${index}]`;
          next = next.nextNode;
          index += 1;
        }
      }
      return `Doesn't contain ${searchValue}`
    },
  }
}

function createNode(value=null, nextNode=null) {
  return {
    value,
    nextNode,
  }
}

// Initialize
let counter = 1;
const lists = [];

document.querySelector("#new-list-button").addEventListener("click", () => {
  const name = `Linked list ${counter}`;
  counter += 1;

  const newList = createLinkedList(name);
  lists.push(newList);

  const div = document.createElement("div");
  div.setAttribute("class", `list-object ${name.replaceAll(" ","-")}`);
  document.querySelector("#list-container").append(div);

  lists.forEach(list => list.render());
});