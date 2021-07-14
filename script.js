// adda common class to all the buttons
let deleteBtn = document.getElementsByClassName("done_btn");
// converting html collection to array, to use array methods
Array.prototype.slice.call(deleteBtn).forEach(function(item) {
  // iterate and add the event handler to it
  item.addEventListener("click", function(e) {
    e.target.parentNode.remove()
//     const el = done_btn[0];
//     if(parentNode.childElementCount==0){
//  done_btn.appendChild(document.createTextNode("Ooops! List is empty"));
//   }

  });
})
