
let string=" ";
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="="){
      string=eval(string);
      document.getElementById('panel').value=string;
    }
    else if(e.target.innerHTML=="C"){
     
      let a=document.getElementById("panel");
      string=" ";
      a.value=string;
      
    }
    else if(e.target.innerHTML=="√"){
     
      let a=document.getElementById("panel");
      string=Math.sqrt(string);
      a.value=string;
      
    }
    else if(e.target.innerHTML=="[X]"){
     string = string.slice(0, string.length - 1);
     document.getElementById('panel').value=string;
    }
    else{  
      string=string+ e.target.innerHTML;
      document.getElementById('panel').value=string;
    }
  })
}) 