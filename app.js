let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul"); 

// event to add item in to do 
btn.addEventListener("click" , function(){
    let item = document.createElement("li")
    item.innerText=inp.value; 

    // adding a delete button for every task 
    let delBtn = document.createElement("button");
    delBtn.innerText="Delete " ; 
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
    
});

// code for deleting an item afer clicking the delete button 
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of detBtn)
// {
//     delBtn.addEventListener("click" , function()
// {
//     let par= this.parentElement;
//     par.remove(); 

// })
// }

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let Listitem = event.target.parentElement; // targets the parent element of the thing causing the event 
        Listitem.remove();
    }
    else{
        console.log("not delete");
    }
});