import axios from "axios"
import { reducer } from "./store/dataSlice";
const api_key = 'e0e5c667605f5e91d8275c973531b80a'
const baseURL = "https://api.edamam.com/search"

const KEY = api_key

const recetaApi = axios.create({
    baseURL,
    params: {
        app_id: "a52b4d43",
        app_key: KEY
    }
});


export const searchApi = async (searchTerm) => {
    try {
        const response = await recetaApi.get("", {
            params: {
                q: searchTerm
            }
        })
        return response.data.hits;
    } catch (error) {
        console.error("Error", error);
        return []
    }
}

export const getRecipeDetails = async (imageUrl) => {
    try {
        const response = await recetaApi.get("", {
            params: {
                q: imageUrl
            }
        })
        const recipes = response.data.hits;
        const recipe = recipes.find(recipe => recipe.recipe.label === imageUrl);
        return reducer ? recipe.recipe : null;
    } catch (error) {
        console.error("Error", error);
        return null;
    }
}