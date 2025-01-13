let lightMode=document.querySelector(".light-mode--btn");

lightMode.addEventListener("click",(()=>{
    document.body.classList.toggle("light-mode");
    lightMode.textContent="Light-Mode"

    if(document.body.classList.contains("light-mode")){
        document.body.classList.toggle("dark-mode--body");
        lightMode.textContent="Dark-Mode"
    }

    else{
        document.body.classList.toggle("dark-mode--body")
    }
}))
