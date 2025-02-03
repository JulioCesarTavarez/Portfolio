document.addEventListener("DOMContentLoaded", () => {
    const baptism = document.getElementById("baptism");


    baptism.addEventListener("check", () => {
        const bapInput = document.getElementById("bapInput");
        bapInput.classList.toggle("hide");
    }); 
})
