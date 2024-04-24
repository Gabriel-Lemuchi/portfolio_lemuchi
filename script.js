const body = document.querySelector('body')
const chk = document.querySelector('#chk')
const header = document.querySelector('header')

chk.addEventListener("click", () =>{
    if(!body.classList.contains("dark") && !header.classList.contains("dark")){
        body.classList.add("dark")
        header.classList.add("dark")
    }
    else{
        body.classList.remove("dark")
        header.classList.remove("dark")
    }
})