window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000); // show splash for 3 seconds
});
