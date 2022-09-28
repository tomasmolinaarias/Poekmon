import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPoke,
  obtenerPokeAction,
  pokeDetalleAction,
  previusPoke,
} from "../redux/pokeDucks";
import { Detalle } from "./Detalle";

export const Pokemones = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemones.results);

  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  React.useEffect(() => {
    const fechDate = () => {
      dispatch(obtenerPokeAction());
    };
    fechDate();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-6 ">
        <h2 className="text-center">pokemones</h2>
        <section className="d-flex justify-content-between ">
          {pokemon.length === 0 && (
            <button
              className="btn btn-primary "
              onClick={() => dispatch(obtenerPokeAction())}
            >
              Pokemones
            </button>
          )}
          {previous && (
            <button
              className="btn btn-warning"
              onClick={() => dispatch(previusPoke())}
            >
              ◀ PREVIUS
            </button>
          )}
          {next && (
            <button
              className="btn btn-success"
              onClick={() => dispatch(nextPoke())}
            >
              NEXT ➤
            </button>
          )}
        </section>
        <article className="pokemones mt-4">
          <ul className="list-group mt-3 text-center">
            {pokemon.map((e) => (
              <li className="list-group-item text-uppercase" key={e.name}>
                {e.name}
                <button
                  className="btn btn-dark btn-sm float-end "
                  onClick={() => dispatch(pokeDetalleAction(e.url))}
                >
                  info
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="col-md-6 ">
        <h2>Detalle pokemon</h2>
        <Detalle />
      </div>
    </div>
  );
};
