import { useReducer } from "react";
import firebase from "../../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import { OBTENER_PRODUCTOS } from "../../types";
const FirebaseState = props =>{

    //console.log(firebase)
    const initialState ={
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState)


    //Trae los productos
    const obtenerProductos = () =>{
        console.log('desdeFireBaseState')
    }

    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState