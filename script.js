document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const colorBoxes = document.querySelectorAll(".color-box");

    function generateColors() {
        colorBoxes.forEach((box) => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
            box.style.backgroundColor = randomColor;
            box.textContent = randomColor.toUpperCase();
        });
    }

    function copyToClipboard(event) {
        const color = event.target.textContent;
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied ${color} to clipboard!`);
        });
    }

    generateBtn.addEventListener("click", generateColors);
    colorBoxes.forEach((box) => {
        box.addEventListener("click", copyToClipboard);
    });

   
    generateColors();
});
