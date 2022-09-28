import axios from "axios";

//constante
const dataInit = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
//types
const Get_Pokemon = "trajo pokemon con exito";
const Next_Pokemon = "trajo nuevos pokemon con exito";
const Previous_Pokemo = "devueleta nuevos pokemon con exito";
const Poke_info = "info pokemon con exito";
// reducer
export default function pokeReducer(state = dataInit, action) {
  switch (action.type) {
    case Get_Pokemon:
      return { ...state, ...action.payload };
    case Next_Pokemon:
      return { ...state, ...action.payload };
    case Previous_Pokemo:
      return { ...state, ...action.payload };
    case Poke_info:
      return { ...state, unPokemon: action.payload };
    default:
      return state;
  }
}
//actions

export const obtenerPokeAction = () => async (dispatch) => {
  if (localStorage.getItem("offset=0")) {
    dispatch({
      type: Get_Pokemon,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    );

    dispatch({
      type: Get_Pokemon,
      payload: res.data,
    });
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const nextPoke = () => async (dispatch, getState) => {
  const { next } = getState().pokemones;
  if (localStorage.getItem(next)) {
    dispatch({
      type: Next_Pokemon,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }

  try {
    const res = await axios.get(next);
    dispatch({
      type: Next_Pokemon,
      payload: res.data,
    });
    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const previusPoke = () => async (dispatch, getState) => {
  const { previous } = getState().pokemones;
  if (localStorage.getItem(previous)) {
    dispatch({
      type: Previous_Pokemo,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  }

  try {
    const res = await axios.get(previous);
    dispatch({
      type: Previous_Pokemo,
      payload: res.data,
    });
    localStorage.setItem(previous, JSON.stringify(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const pokeDetalleAction =
  (url = "https://pokeapi.co/api/v2/pokemon/1/") =>
  async (dispatch, getState) => {
    try {
      const res = await axios.get(url);

      dispatch({
        type: Poke_info,
        payload: {
          nombre: res.data.name,
          ancho: res.data.weight,
          altura: res.data.height,
          fotoFront: res.data.sprites.front_default,
          fotoBackend: res.data.sprites.back_default,
          fotoShiny: res.data.sprites.front_shiny,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
