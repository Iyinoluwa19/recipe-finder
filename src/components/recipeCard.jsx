import { nigerianRecipes } from '../data/dishes.jsx';

export default function RecipeCard() {
    console.log(nigerianRecipes);
    return(
        <div>
            {nigerianRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <table>
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Region</th>
                                <th>Difficulty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{recipe.name}</td>
                                <td>{recipe.region}</td>
                                <td>{recipe.difficulty}</td>
                            </tr>
                            <tr>
                                <td>{recipe.popular ? "✔️" : "❌"}</td>
                                <td>{recipe.region}</td>
                                <td>{recipe.difficulty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}