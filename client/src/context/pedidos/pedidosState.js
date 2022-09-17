import { useReducer } from "react";
import PedidosbaseReducer from "./pedidosReducer";
import PedidosbaseContext from "./pedidosContext";

const PedidosbaseState = props =>{

    const initialState ={
        pedido: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosbaseReducer, initialState)

    return(
        <PedidosbaseContext.Provider
            value={{
                pedido: state.pedido,
                
            }}
        >
            {props.children}
        </PedidosbaseContext.Provider>
    )
}

export default PedidosbaseState