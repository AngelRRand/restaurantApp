import { useReducer } from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";

const FirebaseState = props =>{

    const initialState ={
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    return(
        <FirebaseContext.Provider>
            {props.childen}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState