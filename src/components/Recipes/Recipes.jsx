
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="container mx-auto my-5">


                <div className='grid grid-cols-2 gap-5'>
                    {
                        recipes.map(card => <Card key={card.recipe_id} card={card}></Card>)
                    }
                </div>


        </div>

    );
};

export default Recipes;