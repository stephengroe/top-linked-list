# Linked List

**Interactive page demonstrating linked lists**

Create an unlimited number of linked lists and perform basic CRUD (create, read, update, delete) operations on each list.

I completed this project as coursework for The Odin Project's Computer Science module ([assignment page](https://www.theodinproject.com/lessons/javascript-linked-lists)).

* **Live demo:** https://stephengroe.github.io/top-linked-list/
* **Built with:** Vanilla JS, HTML5, CSS3
* **License:** MIT

## Features

![Demo screenshot](screenshot.png)

Each linked list module includes these methods:

### Create/update/delete

* `prependNode(value)` - Adds a new node to the beginning of the list
* `appendNode(value)` - Adds a new node to the end of the list
* `insertNodeAt(value, index)` - Adds a new node at the specified index
* `popNode()` - Removes the last node from the list
* `removeNodeAt(index)` - Removes the node at the specified index

### Read

* `getSize()` - Returns the number of nodes in the list
* `getHead()` - Returns the value of the first node
* `getTail()` - Returns the value of the last node
* `findByIndex(index)` - Returns the value of the node at the specified index
* `findByValue(value)` - Returns the index of the node at the specified value
* `contains(value)` - Returns whether a node exists with a value

### DOM visualization

Instead of just using the console, I added DOM rendering. You can add lists and use all the preceding functions from the page—random values are provided where necessary.

## Improvements

* **Add user input.** It'd be nice to let the user enter node values, search terms, and indices.
* **Modularize traversing.** Nearly every method includes a few lines of code to traverse the list. Breaking this out into a separate method would make it more easily extensible.
* **Prettier formatting.** It's a bit drab—some colors and better layout would help!

Since this was a simple coursework exercise, I probably won't make these improvements anytime soon... but it's nice to dream!