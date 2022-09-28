import { auth, firebase } from "../firebase";

//data inicial
const dataInicial = {
  loading: false,
  activo: false,
};
// types
const LOADING = "loading";
const USUARIOS_ERROR = "usuarios_error";
const USUARIOS_EXITO = "usuarios_exito";
//reducer
export default function usuariosReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIOS_ERROR:
      return { ...dataInicial };
    case USUARIOS_EXITO:
      return { ...state, loading: false, user: action.payload, activo: true };
    default:
      return { ...state };
  }
}

//aciones
export const ingresoUsuariosAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);

    dispatch({
      type: USUARIOS_EXITO,
      payload: {
        uid: res.user.uid,
        email: res.user.email,
      },
    });
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        uid: res.user.uid,
        email: res.user.email,
      })
    );
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: USUARIOS_ERROR,
    });
  }
};
export const leerUsuarios = () => async (dispatch) => {
  if (localStorage.getItem("usuario")) {
    dispatch({
      type: USUARIOS_EXITO,
      payload: JSON.parse(localStorage.getItem("usuario")),
    });
  }
};
