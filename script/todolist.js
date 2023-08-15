const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

load();

function addTask(){
    if(inputBox.value === ''){
        alert("Please write down your next task!")
    }else{
        let li = document.createElement("li");
        li.setAttribute("id", "item")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.setAttribute("id", "delete")
        span.innerHTML = "<b id='delete'>\u00d7</b>";

        li.appendChild(span);
    }
    inputBox.value = "";
    save();
}

listContainer.addEventListener("click", function(e){
    if(e.target.id === "delete"){
        let element = e.target.parentElement;
        if(element.tagName !== "LI") element = element.parentElement;
        element.remove();
        save();
    }else if(e.target.id === "item"){
        console.log("test")
        e.target.classList.toggle("checked");
        save();
    }

}, false);

function save(){
    localStorage.setItem("todoListItems", listContainer.innerHTML);
}

function load(){
    listContainer.innerHTML = localStorage.getItem("todoListItems");
}