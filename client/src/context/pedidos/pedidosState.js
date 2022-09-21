import { useReducer } from "react";
import PedidosbaseReducer from "./pedidosReducer";
import PedidosbaseContext from "./pedidosContext";
import { SELECCIONAR_PRODUCTO, CONFIMAR_ORDENAR_PLATILLO } from "../../types";

const PedidosbaseState = props =>{

    const initialState ={
        pedido: [],
        plato: null
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosbaseReducer, initialState)

    const seleccionarPlato = item =>{
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: item
        })
    }

    const confirmarPedido = pedido =>{
        dispatch({
            type: CONFIMAR_ORDENAR_PLATILLO,
            payload: pedido
        })
    }
    return(
        <PedidosbaseContext.Provider
            value={{
                pedido: state.pedido,
                plato: state.plato,
                seleccionarPlato,
                confirmarPedido
                
            }}
        >
            {props.children}
        </PedidosbaseContext.Provider>
    )
}

export default PedidosbaseState