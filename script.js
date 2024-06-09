const apiKey = 'uHZVylfM-wVS1Tgn9De-tWWqFc4a51VJXSE2OBDkQcQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('likes')) {
        likeCount = parseInt(localStorage.getItem('likes'), 10);
        likeCountElement.textContent = likeCount;
    }
    fetchRandomImage();
});

async function fetchRandomImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayImage(data);
    } catch (error) {
        console.error('Ошибка при получении изображения: ', error);
    }
}



function displayImage(data) {
    const imageElement = document.getElementById('unsplash-image');
    const photographerNameElement = document.getElementById('photographer-name');

    imageElement.src = data.urls.regular;
    photographerNameElement.textContent = data.user.name;
}



const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');
let likeCount = 0;

likeButton.addEventListener('click', () => {
    likeCount++;
    localStorage.setItem('likes', likeCount);
    likeCountElement.textContent = likeCount;
})

