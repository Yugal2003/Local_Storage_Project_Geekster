//select text area from .html file
const textarea = document.querySelector("textarea"); 

//set the textareavalue in localstorage
function text(){ 
    localStorage.setItem('textareaValue',textarea.value);
}

//check the textareavalue in localstorage or not 
//if yes so get that value & pass in the textarea for permanent
if(localStorage.getItem('textareaValue')){
    textarea.value = localStorage.getItem('textareaValue');
}
textarea.addEventListener("input" , text); // call a function
