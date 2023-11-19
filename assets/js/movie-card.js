"use strict";

import { imageBaseURL } from "./api.js";

// movie card

export function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="https://raw.githubusercontent.com/Ayushpatel2003/TMNMovieDatabase/main/server/db/assets/${movie.poster_id}"
        alt="${movie.title}"
        class="img-cover"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${movie.title}</h4>

    <div class="meta-list">
      <div class="meta-item">
        <img
          src="./assets/images/star.png"
          width="20"
          height="20"
          loading="lazy"
          alt="rating"
        />
        <span class="span">${movie.rank}</span>
      </div>

      <div class="card-badge">${movie.year}</div>
    </div>

    <a href="./detail.html" class="card-btn" title="${movie.title}" onclick="getMovieDetail(${movie.movie_id})"></a>
  `;

  return card;
}
