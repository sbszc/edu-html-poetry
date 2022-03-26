function myFunction() {
    var demo = document.getElementById("demoText");
    
    if (demo.style.color == "black" || demo.style.color == "") {
        demo.style.color = "red";
        demo.style.fontSize = "40px";
    } else if (demo.style.color == "red") {
        demo.style.color = "black";
        demo.style.fontSize = "20px";
    }
}