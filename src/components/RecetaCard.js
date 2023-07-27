import { useState } from "react";
import { searchApi } from "../apiRecetas";
import { Link } from "react-router-dom";

export const RecetaCard = () => {
  const [searchTerm, setSearchTerm] = useState("fish");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await searchApi(searchTerm);
      setResults(searchResults);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <>
      <div className="text-center my-4 px-5">
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center gap-3"
        >
          <label className="form-label">Receta: </label>
          <input
            className="form-control"
            type="text"
            placeholder="comida"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="boton btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>

      <div className="container-md">
        <div className="row">
          {results.map((result) => (
            <div key={result.recipe.label} className="col-md-4">
              <div className="card bg-dark text-white mb-3">
                <img
                    style={{ opacity: "0.6" }}
                    src={result.recipe.image}
                    alt={result.recipe.label}
                />
                <div className="card-img-overlay">
                    <div>
                        <h5
                            className="card-title text-center m-4 fs-4"
                            key={result.recipe.label}
                            >
                            {result.recipe.label}
                        </h5>
                    </div>
                    <div className="botones">
                        <button className="mb-3">
                            <Link
                                to={`/detalle/${result.recipe.label}`}
                                className="detalle"
                            >
                                Ver detalles
                            </Link>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
