function movingFirstMenu() {
    const firstMenu = document.getElementById("first");
    const currentTransform = getComputedStyle(firstMenu).transform;

    if (currentTransform === 'matrix(1, 0, 0, 1, 0, -100)') {
        firstMenu.style.animation = "dropBounce 0.8s ease forwards";
    } else {
        firstMenu.style.animation = "jumpUp 0.8s ease forwards";
    }
}


