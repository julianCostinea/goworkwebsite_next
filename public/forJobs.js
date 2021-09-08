document.querySelector(".DrawerToggle").addEventListener("click", function () {
    document.querySelector(".Backdrop").classList.toggle('BackdropShow')
});

document.querySelector(".Backdrop").addEventListener("click", function () {
    document.querySelector(".Backdrop").classList.remove('BackdropShow')
});
