let mediaqueryList = window.matchMedia("(min-width: 992px)");

function manejador() {
    if (mediaqueryList.matches) {
        alert('La media query ahora se cumple');
    }
}

mediaqueryList.addEventListener('change', manejador);