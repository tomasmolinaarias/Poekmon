import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import pokeReducer from "./pokeDucks";
import usuariosReducer, { leerUsuarios } from "./usuariosDucks";

const rootReducer = combineReducers({
  pokemones: pokeReducer,
  user: usuariosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  leerUsuarios()(store.dispatch);
  return store;
}
