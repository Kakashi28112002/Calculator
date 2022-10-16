var string = "";
const buttons = document.querySelectorAll("button")
const input = document.querySelector("input")

Array.from(buttons).forEach((button)=>{
 // console.log(button);
  button.addEventListener('click',(event)=>{
      console.log(event.currentTarget)
    const numberButtons = event.currentTarget.classList;
    if(numberButtons.contains("btn-numbers")){
     string += event.currentTarget.innerHTML;
      input.value = string ;
    }
     else if(numberButtons.contains("Clear-Screen")){
     string = "";
      input.value = string ;
    }
    else if(numberButtons.contains("Equal")){
     string =+ eval(string)
      input.value = string;
    }





 })
})
