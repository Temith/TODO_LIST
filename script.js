function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("new_todo");
  db.collection("todo-items").add({
    text: text.ariaValueMax,
    middle: "active",
  });
  text.value = "";
}

// function getItem() {
//   db.collection("todo_items").onSnapshot((snapshot) => {
//     console.log(snapshot);
//   });
// }
