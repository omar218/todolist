// selection des elements du dom

const taskInput = document.getElementById('newTask')
const taskList = document.getElementById('taskList')
const addTaskBtn = document.getElementById('addTaskBtn')

// fonction pour ajouter une nouvelle tache

function addTask () {

    const taskText = taskInput.value.trim()
    
    if (taskText === ""){
        alert('veuillez saisir une tache obligatoirement')
        return
    }
     
//creation d'un nouvel element de list
const newTaskItem = document.createElement('li')
newTaskItem.textContent = taskText

//ajout d'un bouton pour supprimer ma tache
const deleteBtn = document.createElement('button')
deleteBtn.textContent = "supprimer"
deleteBtn.style.marginLeft = "10px"
deleteBtn.onclick = function(){
    taskList.removeChild(newTaskItem)
}

//ajouter de fonctionnalite pour marquer une tache comme terminer

newTaskItem.onclick = function(){
    newTaskItem.classList.toggle('done')
}

//ajout d'un element li a la liste ul
newTaskItem.appendChild(deleteBtn)
taskList.appendChild(newTaskItem)


//renitialisation du champs text
taskInput.value = ""

}

//Ajout d'un ecouteur d'evenement sur le bouton
 addTaskBtn.addEventListener('click', function(){
     addTask()
 })




localStorage.setItem("newTaskInput","TaskText est une taches specifique")

//localStorage.getItem("newTaskInput")
//localStorage.clear()

//option pour ajouter une tache en appuyant sur entrer

// taskInput.addEventListener('keydown',function(event){
//     if(event.key === "Enter"){
//       console.log('vous avez appuyer sur entrer') 
//     }
//     addTask()
// })
