const accordians=document.querySelectorAll(".accordian");
accordians.forEach(accordians =>{
    const more=accordians.querySelector(".more");
    const answer=accordians.querySelector(".answer");

    accordians.addEventListener("click",()=>{
       if(more.classList.contains("active")){
        more.classList.remove("active");
        answer.style.maxHeight=null;
    }
    else{
        more.classList.add("active");
        answer.style.maxHeight=answer.scrollHeight+"px";
    }
        
    })
})