document.querySelector(".DrawerToggle").addEventListener("click", function () {
    document.querySelector(".Backdrop").classList.toggle('BackdropShow');
    document.querySelector(".SideDrawer").classList.remove('Close');
    document.querySelector(".SideDrawer").classList.add('Open');
});

document.querySelector(".Backdrop").addEventListener("click", function () {
    document.querySelector(".Backdrop").classList.remove('BackdropShow');
    document.querySelector(".SideDrawer").classList.add('Close');
    document.querySelector(".SideDrawer").classList.remove('Open');
});
