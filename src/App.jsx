import Navbar from "./components/navbar";
import RecipeCard from "./components/recipeCard";
import {nigerianRecipes} from "./data/dishes.jsx";


function App() {


  return (
    <div className="px-6 py-4 bg-gray-100 font-[sans-serif]">
      <Navbar />
      {nigerianRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default App;
