

document.addEventListener("DOMContentLoaded", function () {
    const mostrarImagenBtn = document.getElementById("btn-gift");
    const overlay = document.getElementById("overlay");
    const imgGift = document.getElementById("imgGift");

    mostrarImagenBtn.addEventListener("click", function () {
        overlay.style.display = "flex";

        setTimeout(function () {
            imgGift.classList.add("ampliada");
        }, 50);
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
            imgGift.classList.remove("ampliada");
        }
    });

    imgGift.addEventListener("click", function () {
        overlay.style.display = "none";
        imgGift.classList.remove("ampliada");

        setTimeout(function () {
            imgGift.classList.add("reducir");
        }, 50);
    });
});