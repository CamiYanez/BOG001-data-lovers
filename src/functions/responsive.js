const coverCharactersWeb = document.getElementById("coverCharactersWeb");
const gifPortal = document.getElementById("gifPortal");

let mediaqueryList = window.matchMedia("(min-width: 576px)");


const resize = () => {
    if (mediaqueryList.matches) {
        coverCharactersWeb.classList.remove("hide");
        gifPortal.classList.remove("hide");

        coverCharactersWeb.addEventListener("click", (e) => {
            if (e.target.closest('.coverCharacters')) {
                // let x = e.offsetX
                // let total = x - 80;
                let x = e.target.getBoundingClientRect().x;
                let width = e.target.getBoundingClientRect().width;
                let total = Math.abs(x - width / 2) + 10;
                gifPortal.classList.add('animationsPortal')
                setTimeout(() => {
                    gifPortal.classList.remove('animationsPortal')
                }, 2000);
                setTimeout(() => {
                    // gifPortal.style.transform = `translateX(${x}px)`;
                    gifPortal.style.left = total + "px";
                }, 750);
                // gifPortal.style.transform = "scale(0)";
                // gifPortal.style.transform = "scale(1.2)"
            }
        })


    } else {
        coverCharactersWeb.classList.add("hide");
        gifPortal.classList.add("hide");
    }
};

window.addEventListener("resize", resize);
resize();

export default {};

