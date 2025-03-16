import { recipes } from "./recipes.mjs";

function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

function init() {
    const shuffledRecipes = [...recipes];
    for (let i = shuffledRecipes.length - 1; i > 0; i--) {
      const j = randomNumber(i + 1);
      [shuffledRecipes[i], shuffledRecipes[j]] = [shuffledRecipes[j], shuffledRecipes[i]];
    }
    createArticles(shuffledRecipes);
  }
  
init();

function starRating(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStarCheck = rating % 1 === 0.5;

  let i = 0;
  for (i; i < fullStars; i++) {
    stars += "★";
  }

  if (halfStarCheck) {
    stars += "⯪";
  }

  while (stars.length < 5) {
    stars += "☆";
  }

  return stars;
}

function createArticles(recipesToRender) {
  const container = document.getElementById("recipes-view");
  container.innerHTML = "";

  recipesToRender.forEach((recipe) => {
    const recipesDiv = document.createElement("div");

    let tags = "";
    recipe.tags.forEach((tag) => {
      tags += `
        <div class="recipe-tags">
          <p>${tag}</p>
        </div>
      `;
    });

    const html = `
      <div class="recipe-view">
        <div class="recipe-image">
          <img src="${recipe.image}" alt="image of ${recipe.name}"></img>
        </div>
        <div class="inner-recipe-view">
          <div class="recipe-tags-container">
            ${tags}
          </div>
          <div class="recipe-title">
            <h2>${recipe.name}</h2>
          </div>
          <div class="recipe-rating" aria-hidden="true">
            <p>${starRating(recipe.rating)}</p>
          </div>

          <div class="hidden">
            <div class="recipe-description">
              <p>${recipe.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    recipesDiv.innerHTML = html;
    container.appendChild(recipesDiv);
  });
}

function searchRecipes(searchValue) {
  const lowerSearchValue = searchValue.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) => {
    const lowerName = recipe.name.toLowerCase();
    const lowerDescription = recipe.description.toLowerCase();
    const lowerTags = recipe.tags.map((tag) => tag.toLowerCase());

    if (lowerName.includes(lowerSearchValue)) {
      return true;
    }
    if (lowerDescription.includes(lowerSearchValue)) {
      return true;
    }
    if (lowerTags.some((tag) => tag.includes(lowerSearchValue))) {
      return true;
    }
    return false;
  });

  createArticles(filteredRecipes);
}




const searchButton = document.getElementById("search-button");
const findRecipe = document.getElementById("find-recipe");

if (searchButton && findRecipe) {
  searchButton.addEventListener("click", () => {
    const searchValue = findRecipe.value;
    searchRecipes(searchValue);
  });
}