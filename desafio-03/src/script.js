document.getElementById('heroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('heroName').value.trim();
    const xp = parseInt(document.getElementById('heroXP').value);
    let level = '';
    let imagePath = '';

    if (xp < 1000) {
        level = 'Ferro';
        imagePath = '../assets/images/ferro.jpg';
    } else if (xp <= 2000) {
        level = 'Bronze';
        imagePath = '../assets/images/bronze.jpg';
    } else if (xp <= 5000) {
        level = 'Prata';
        imagePath = '../assets/images/prata.png';
    } else if (xp <= 7000) {
        level = 'Ouro';
        imagePath = '../assets/images/ouro.png';
    } else if (xp <= 8000) {
        level = 'Platina';
        imagePath = '../assets/images/platina.png';
    } else if (xp <= 9000) {
        level = 'Ascendente';
        imagePath = '../assets/images/ascendente.jpg';
    } else if (xp <= 10000) {
        level = 'Imortal';
        imagePath = '../assets/images/imortal.png';
    } else {
        level = 'Radiante';
        imagePath = '../assets/images/radiante.png';
    }

    const resultText = document.getElementById('resultText');
    const rankImage = document.getElementById('rankImage');

    resultText.textContent = `O Herói de nome ${name} está no nível de ${level}`;

    rankImage.src = imagePath;
    rankImage.alt = `Imagem do rank ${level}`;
    rankImage.style.display = 'block';
});
