import {recipes} from "./recipes.mjs"



function createArticles(recipes) {
    const container = document.getElementById("recipes-view");
    recipes.forEach(recipes => {
        const recipesDiv = document.createElement("div");

        const html = `
            <div class="recipe-view">
                <div class="recipe-image">
                    <img src="${recipes.image}">
                </div>
                <div class="recipe-tags">
                    <p>${recipes.tags}</p>
                </div>
                <div class="recipe-title">
                    <h2>${recipes.name}</h2>
                </div>
                <div class="rating">
                    <p>${recipes.rating}</p>
                </div>

                <div id="hidden">
                    <div class="recipe-description">
                        <p>${recipes.description}</p>
                    </div>
                </div>
            </div>
        `;

        recipesDiv.innerHTML = html;
        container.appendChild(recipesDiv);
    });
}

createArticles(recipes);