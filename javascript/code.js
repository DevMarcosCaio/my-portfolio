const hamburger = document.querySelector(".hero__nav");
const navLinks = document.querySelector(".hero__navlist");
const links = document.querySelectorAll(".hero__navlist--items li");
const superLink = document.querySelector(".link1");
const superLink2 = document.querySelector(".link2");
const superLink3 = document.querySelector(".link3");
const superLink4 = document.querySelector(".link4");
const superLink5 = document.querySelector(".link5");



hamburger.addEventListener("click", () => {    
    navLinks.classList.toggle("abrir"); // animacao abrindo o burger 
    hamburger.classList.toggle("fechar"); // animacao fechando o burger

    links.forEach(link => {
        link.classList.toggle("fade"); // animacao aparecendo os itens do menu mobile 
    });
   

});

superLink.addEventListener("click",() => {
    navLinks.style.display = "none";
    hamburger.classList.toggle("fechar");
    window.location.reload();
});

superLink2.addEventListener("click",() => {
    navLinks.style.display = "none";
    hamburger.classList.toggle("fechar");
    window.location.reload();
});

superLink3.addEventListener("click",() => {
    navLinks.style.display = "none";
    hamburger.classList.toggle("fechar");
    window.location.reload();
});

superLink4.addEventListener("click",() => {
    navLinks.style.display = "none";
    hamburger.classList.toggle("fechar");
    window.location.reload();
});

superLink5.addEventListener("click",() => {
    navLinks.style.display = "none";
    hamburger.classList.toggle("fechar");
    window.location.reload();
});


var counter = 1;
setInterval(function (){
    document.getElementById("radio" + counter).checked = true;
    counter++;
        if(counter >4){
            counter = 1;
        }
},6000);

