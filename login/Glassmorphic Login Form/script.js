const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Cursor hover effect for interactive elements
document.querySelectorAll("button, a, input").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2, duration: 0.2, background: "rgba(255, 255, 255, 0.8)" });
    });
    element.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.2, background: "rgba(0, 174, 239, 0.8)" });
    });
});
