export default function Navbar() {
    return (
        <nav >
            <h1 className=" py-4 px-5 text-4xl font-semibold">Nigerian Dishes</h1>
            <p className="ml-5 ">Filter and discover recipes</p>

                <div >
                    <div>
                        <h3>Category</h3>
                        <button>Soups</button>
                        <button>Breakfast</button>
                        <button>Street food</button>
                        <button>Drinks</button>
                        <button>Swallows</button>
                    </div>

                    <div>
                        <h3>Difficulty</h3>
                        <button>Easy</button>
                        <button>Medium</button>
                        <button>Hard</button>
                    </div>

                    <div>
                        <h3>Region</h3>
                        <button>West</button>
                        <button>South-West</button>
                        <button>South-South</button>
                        <button>North</button>
                    </div>
                </div>
        </nav>
    )
}