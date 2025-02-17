
document.getElementById("toggleTheme").onclick = function(){
    document.body.classList.toggle("sombre");

    if (document.body.classList.contains("sombre")) {
        document.getElementById("toggleTheme").textContent = "Activer le mode clair";
    } else {
        document.getElementById("toggleTheme").textContent = "Activer le mode sombre";
    } 
}