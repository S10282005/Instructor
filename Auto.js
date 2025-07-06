const containerE1 = document.querySelector(".Container"); // Fixed typo

const careers = ["Youtube", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    containerE1.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;
    characterIndex++;
    if (characterIndex > careers[careerIndex].length) {
        careerIndex = (careerIndex + 1) % careers.length;
        characterIndex = 0;
    }
    setTimeout(updateText, 400);
}

