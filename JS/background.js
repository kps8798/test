const images = [
    '0.jpeg',
    '1.jpeg',
    '2.jpeg',
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");

bg.src = `./images/${randomImage}`;

document.body.appendChild(bg);

