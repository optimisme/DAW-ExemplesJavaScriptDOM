function intercanvia() {
    var parentN = document.getElementById("parentN");
    var parentT = document.getElementById("parentT");
    var child1 = document.getElementById("child1");
    var childB = document.getElementById("childB");

    // Clona els elements un cop
    var child1Clone = child1.cloneNode(true);
    var childBClone = childB.cloneNode(true);

    // Reemplaça fill 1 amb fill B i viceversa
    if (parentN.contains(child1)) {
        parentN.replaceChild(childBClone, child1);
        parentT.replaceChild(child1Clone, childB);
    } else {
        parentN.replaceChild(child1Clone, childB);
        parentT.replaceChild(childBClone, child1);
    }
}