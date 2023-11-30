document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('add-recipe-form');
    const recipesList = document.getElementById('recipes');

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const recipeIngredients = document.getElementById('recipe-ingredients').value;
        const recipeInstructions = document.getElementById('recipe-instructions').value;

        if (recipeName && recipeIngredients && recipeInstructions) {
            const recipeItem = document.createElement('li');
            recipeItem.innerHTML = `
                <h3>${recipeName}</h3>
                <p><strong>Ingredients:</strong> ${recipeIngredients}</p>
                <p><strong>Instructions:</strong> ${recipeInstructions}</p>
                <button class="delete-button">Delete</button>
            `;

            recipeItem.querySelector('.delete-button').addEventListener('click', () => {
                recipesList.removeChild(recipeItem);
            });

            recipesList.appendChild(recipeItem);
            recipeForm.reset();
        }
    });
});
