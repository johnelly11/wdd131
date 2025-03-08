import {recipes} from "./recipes.mjs"



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


function createArticles(recipes) {
    const container = document.getElementById("recipes-view");
    recipes.forEach(recipes => {
        const recipesDiv = document.createElement("div");

        let tags = "";
        recipes.tags.forEach((tag) => {
            tags += `
            <div class="recipe-tags">
                <p>${tag}</p>
            </div>
            `;
        });

        

        const html = `
            <div class="recipe-view">
                <div class="recipe-image">
                    <img src="${recipes.image}" alt="image of ${recipes.name}"></img>
                </div>
                <div class="inner-recipe-view">
                    <div class="recipe-tags-container">
                        ${tags}
                    </div>
                    <div class="recipe-title">
                        <h2>${recipes.name}</h2>
                    </div>
                    <div class="recipe-rating" aria-hidden="true">
                        <p>${starRating(recipes.rating)}</p>
                    </div>

                    <div class="hidden">
                        <div class="recipe-description">
                            <p>${recipes.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        recipesDiv.innerHTML = html;
        container.appendChild(recipesDiv);
    });
}

createArticles(recipes);