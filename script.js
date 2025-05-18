

const cards = document.querySelectorAll('.card');
const background = document.getElementById('background');
const movieInfo = document.getElementById('movieInfo');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const bg = card.getAttribute('data-bg');
    const title = card.getAttribute('data-title');
    const year = card.getAttribute('data-year');
    const director = card.getAttribute('data-director');
    const description = card.getAttribute('data-description');

    background.style.backgroundImage = `url(${bg})`;

    movieInfo.innerHTML = `
      <div class="movie-details">
        <h1 class="movie-title">${title}</h1>
        <div class="movie-meta">
          <span>${year}</span> |
          <span><strong>DIRECTOR:</strong> ${director}</span> 
        </div>
        <p class="movie-description">${description}</p>
        <div class="movie-actions">
          <button class="stream-btn">STREAM NOW</button>
        <button class="like-btn">♥</button>
        </div>
      </div>
    `;

    const likeBtn = movieInfo.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('liked');
    });
  });
});