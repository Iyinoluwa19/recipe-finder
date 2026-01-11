import { nigerianRecipes, nigerianBreakfast } from '../data/dishes.jsx';

export default function RecipeCard() {
    console.log(nigerianRecipes);
    return(
        <div>
            {nigerianRecipes.map((recipe) => (
                <div key={recipe.id}>
                    <table className='mb-5 mt-5 mx-auto'>
                        <thead>
                            <tr className='bg-gray-400'>
                                <th className='border px-16'>Recipe Name</th>
                                <th className='border px-16'>Region</th>
                                <th className='border px-16'>Difficulty</th>
                            </tr>
                        </thead> 
                        <tbody className='px-4'>
                            <tr>
                                <td className='border'>{recipe.name}</td>
                                <td className='border'>{nigerianRecipes[0].tags.map(( tag,index ) => (
                                    <li key={index}>{tag}</li>
                                ))}</td>
                                <td className='border'>{recipe.difficulty}</td>
                            </tr>
                            <tr className='pb-3'>
                                <td className='border'>{recipe.servings}</td>
                                <td className='border'>{recipe.region}</td>
                                <td className='border'>{recipe.difficulty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}