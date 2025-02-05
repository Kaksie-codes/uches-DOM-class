let count = 0;
let incrementButton = document.getElementById("icr");
let decrementButton = document.getElementById("dcr");
let resetButton = document.getElementById("reset");
let box = document.getElementById("box");
box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "blue";
box.textContent = count;
box.style.color = "white";
box.style.fontSize = '50px'
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";
box.style.borderRadius = "50%";
box.style.border = "10px solid black";
box.style.cursor = "pointer";

const incrementCount = () =>  {
    if(count >= 50){
        alert("Count cannot be more than 50");        
    }else{
        ++count;
        box.textContent = count;
    } 
    console.log('i am stubborn')  
}

const decrementCount = () =>  {
    if(count <= 0){
        alert("Count cannot be negative");
        console.log("before return");  
        return;
        console.log("after return");    
    }
    --count;
    box.textContent = count;
}
const resetCount = () =>  {
    count = 0;
    box.textContent = count;
}

function keypad(){

}

incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
resetButton.addEventListener("click", function() {
    count = 0;
    box.textContent = count;
})
//   let header = document.getElementById('header');
//   console.log(header);
//   header.textContent = "This is Netisens ICT"
//   header.style.color = 'red';
//   let paragraph = document.createElement('p');
//   paragraph.textContent = "This is a paragraph created dynamically";
//   let parentDiv = document.getElementsByTagName('div');
//   console.log(parentDiv);
//   let targetDiv = parentDiv[0]
//   targetDiv.appendChild(paragraph)
//   const paragraphs = document.getElementsByClassName('para')
//   console.log(paragraphs)
//   paragraphs[1].style.color = 'green'
//   const specialTexts = document.querySelector('p .special')
//   console.log(specialTexts)