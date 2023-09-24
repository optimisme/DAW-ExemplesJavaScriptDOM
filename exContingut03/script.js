function intercanvia() {
    var child1 = document.getElementById("child1");
    var childB = document.getElementById("childB");

    var parent1 = child1.parentNode;
    var parentB = childB.parentNode;

    var child1Clone = child1.cloneNode(true);
    var childBClone = childB.cloneNode(true);

    parent1.replaceChild(childBClone, child1);
    parentB.replaceChild(child1Clone, childB);
}