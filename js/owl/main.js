var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#container1");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

});