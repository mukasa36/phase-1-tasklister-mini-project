document.addEventListener("DOMContentLoaded", () => {
  // your code here

let form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  // e.target.input.value
  console.log(e.target.task_description.value)

  taskHandler(e.target.task_description.value)
  form.reset();
})

});
// creating a task using a function and an event listener

function taskHandler(data){

  let p =document.createElement("p");
  // creating a button to cancel the task
  let btn =document.createElement("button");
  p.innerText =`${data} `;
   btn.textContent ="x"


  // creating a listener for the button
 btn.addEventListener('click',btnHandler)
  // appending  the button to the p tag in the dom
 p.appendChild(btn);
  // appending the p tag to the dom
  document.querySelector("#create-task-form").appendChild(p);

}

function btnHandler(e){
  e.target.parentNode.remove();
}
