// const inputBox= document.getElementById("input-box");
// comments ....

// const listContainer = document.getElementById("list-container");

// function addTask(){

//     if(inputBox.value === ''){
//         alert("Please enter some task!");

//     }
//     else{
//         let li =document.createElement("li");
//         li.innerHTML=inputBox.value ;
//         listContainer.appendChild(li);
//         let span =document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
       
// //         span.onclick = function() {
// //             deletelist();
// //           };
          

// //     }
// //     inputBox.value = "";

// // }

// span.onclick = function() {
//     deleteList(this);
//   };
// }
// inputBox.value = "";
// }

// // Function to delete a list item
// function deleteList(element) {
// let listItem = element.parentNode;
// listItem.parentNode.removeChild(listItem);
// }





// // for deletion

// // function deletelist(){
// // let newArray = list-container.filter(li => !elementsToDelete.includes(li));


// // console.log("bbuebeiiehf");


 
// // }

// // function deleteList(element) {
// //     let listItem = element.parentNode;
// //     listItem.parentNode.removeChild(listItem);
// //   }





const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let tasks = []; // Array to store tasks

function addTask() {
  if (inputBox.value === '') {
    alert("Please enter some task!");
  } else {
    let task = inputBox.value;
    tasks.push(task); // Add task to the array

    renderList();

    inputBox.value = "";
  }
}

function renderList() {
  listContainer.innerHTML = ""; // Clear list container

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;
    listContainer.appendChild(li);

      if (task.completed) {
      li.innerHTML += ' <span class="checked">&#x2713;</span>';
    }

    listContainer.appendChild(li);


    edit_button.addEventListener("click", function() {
    paragraph.contentEditable = true;
    paragraph.style.backgroundColor = "#dddbdb";
  } );
  
  end_button.addEventListener("click", function() {
    paragraph.contentEditable = false;
    paragraph.style.backgroundColor = "#ffe44d";
  } )
  
  

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    span.onclick = function() {
      deleteTask(task);
    };
  });
}


  
  

function deleteTask(task) {
  tasks = tasks.filter((t) => t !== task); // Remove task from array
  renderList();
}










