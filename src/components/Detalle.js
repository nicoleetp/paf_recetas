import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../apiRecetas";
import { useEffect, useState } from "react";

export const Detalle = () => {
    const { image } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null)

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const results = await getRecipeDetails(image);
                setRecipeDetails(results);
            } catch (error) {
                console.log("Error: ", error);
            }
        }

        fetchRecipeDetails();
    }, [])


    if (!recipeDetails) {
        return (
            <div className="container d-flex align-center justify-content-center mt-5">
                <div className="spinner-border mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="row contenedor-detalle">

                <h1 className="text-center py-3">
                    Detalle de la receta: <span className="text-danger"> {recipeDetails.label}</span>
                </h1>

                <div className="card mb-3 card-detalle" style={{maxWidth:"800px"}}>
                    <div className="row g-0 p-2">
                        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                            <img src={recipeDetails.image} className="img-fluid rounded-start" alt="..." />
                            <a href={recipeDetails.url} target="_blank" className="btn btn-outline-primary mt-3">
                                Ver receta
                            </a>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body px-5">
                            <h1 className="card-title text-center">{recipeDetails.label}</h1>
                            <h4 className="card-text">Ingredientes</h4>
                            {
                                recipeDetails.ingredients.map(recipe => (
                                    <div key={recipe.food} className="row mb-3">
                                        <div className="col-md-6">
                                            <p>{recipe.text}</p>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={recipe.image} className="img-fluid rounded-start" width="50px" height="10px" alt={recipe.text}/>
                                        </div>

                                    </div>
                                ))
                            }
                            <div className="row">
                                <div className="col-md-12">
                                    <h6>
                                        <span class="badge bg-danger">Calorias:</span>
                                        <span> {recipeDetails.calories} </span>    
                                    </h6>
                                    <h6>
                                        <span class="badge bg-primary">Total peso:</span>
                                        <span> {recipeDetails.totalWeight} </span>    
                                    </h6>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
