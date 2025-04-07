var inp = document.getElementById("myInput");
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("equal").click();
    }
});