//Activity 4: Module Pattern

//Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add,remove, and list items.

function managingItems() {
  let listofitems = ["Apple"];
  return {
    add: function (item) {
      return listofitems.push(item);
    },
    remove: function (item) {
      let itemtoRemove = item;
      let index = listofitems.indexOf(itemtoRemove);
      if (index !== -1) {
        listofitems.splice(index, 1);
      }
    },
    list: function () {
      console.log(listofitems);
    },
  };
}

let items = managingItems();
items.add("Mango");
items.add("Berry");
items.remove("Apple");
items.list();
