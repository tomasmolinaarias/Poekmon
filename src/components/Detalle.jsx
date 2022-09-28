import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeDetalleAction } from "../redux/pokeDucks";

export const Detalle = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fechDate = () => {
      dispatch(pokeDetalleAction());
    };
    fechDate();
  }, [dispatch]);
  const pokemon = useSelector((store) => store.pokemones.unPokemon);

  return pokemon ? (
    <div className="card text-bg-dark mt-4 mb-3  text-center">
      <div className="card-body">
        <img src={pokemon.fotoFront} alt="Pokemon" className="img-fluid" />
        <img src={pokemon.fotoBackend} alt="Pokemon" className="img-fluid" />
        <img src={pokemon.fotoShiny} alt="Pokemon" className="img-fluid" />
        <div className="card-title">{pokemon.nombre}</div>
        <p className="card-footer">
          Alto:{pokemon.altura} Ancho:{pokemon.ancho}
        </p>
      </div>
    </div>
  ) : null;
};
