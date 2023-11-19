"use strict";

import { imageBaseURL } from "./api.js";

// movie card

export function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        src="https://cdn.discordapp.com/attachments/1018015986970013697/1175607911699984425/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg?ex=656bd92f&is=6559642f&hm=1509a1d36f271517dc3a3444b4d813d260f245f805a9266692fd3ed83519e1e6&"
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
