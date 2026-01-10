import { nigerianRecipes } from '../data/dishes.jsx';

export default function RecipeCard() {
    console.log(nigerianRecipes);
    return(
        <div>
            {nigerianRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>

                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </div>
            ))}
        </div>
    )
}