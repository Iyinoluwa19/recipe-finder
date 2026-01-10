import { nigerianRecipes } from '../data/dishes';

export default function RecipeCard() {
    return(
        <div>
            {nigerianRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                </div>
            ))}
        </div>
    )
}