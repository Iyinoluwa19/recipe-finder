
export default function RecipeCard({recipe}) {
    return(
            <div className="bg-white px-4 py-4 mb-4 rounded-lg shadow-md font-sans mx-4">
                <div className="flex flex-row justify-between">
                    <h2 className="font-bold text-2xl">{recipe.name}</h2>
                    <span className={` ${recipe.popular === true && "text-xs text-amber-700 rounded-2xl bg-amber-100 px-4 font-bold pt-1.5"}`}>{recipe.popular && "⭐ Popular"}</span>
                </div>
                
                <div className="flex flex-end">
                    <p className="text-[14px] py-2.5 pr-3 text-gray-600">📍 {recipe.region}</p>
                    <p className="text-[14px] py-2.5 pr-3 text-gray-600">⏱ {recipe.time} mins</p>
                    <p className="text-[14px] py-2.5 pr-3 text-gray-600">👥 {recipe.servings} servings</p>
                </div>

                <div className="flex my-1 gap-2">
                    <p className="rounded-sm py-1 border-white px-2 text-sm text-amber-700 font-semibold bg-amber-100">{recipe.difficulty}</p>
                    <p className="rounded-sm py-1 border-white px-2 text-sm text-amber-700 font-semibold bg-red-100">🌶️ {recipe.spiceLevel}/5</p>
                </div>

                <div className="mt-4 mb-2">
                    {recipe.tags.map((tag, index) => (
                        <span key={index} className="mr-2 text-xs bg-sky-100 text-blue-700 px-2 py-1 rounded-full">#{tag}</span>
                    ))}
                </div>

                <div className="border-t border-t-gray-200 mt-4">
                    <h3 className="font-semibold text-gray-600 my-2">Ingredients:</h3>
                    {recipe.ingredients.map((ingredient, index) => (
                        <span key={index} className="rounded-sm bg-gray-200 mr-2 px-2 py-1 text-sm text-gray-600">{ingredient}</span>
                    ))}
                </div>
            </div>
    )
}