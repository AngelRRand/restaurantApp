import { useReducer } from "react";
import PedidosbaseReducer from "./pedidosReducer";
import PedidosbaseContext from "./pedidosContext";
import { SELECCIONAR_PRODUCTO, 
    CONFIMAR_ORDENAR_PLATILLO, 
    MOSTRAR_RESUMEN,
    ELIMINAR_PEDIDO
} from "../../types";

const PedidosbaseState = props =>{

    const initialState ={
        pedido: [],
        plato: null,
        total: 0
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

    const enseñarResumen = total =>{
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    const eliminarPedido = id =>{
        dispatch({
            type: ELIMINAR_PEDIDO,
            payload: id
        })
    }
    return(
        <PedidosbaseContext.Provider
            value={{
                pedido: state.pedido,
                plato: state.plato,
                total: state.total,
                seleccionarPlato,
                confirmarPedido,
                enseñarResumen,
                eliminarPedido
            }}
        >
            {props.children}
        </PedidosbaseContext.Provider>
    )
}

export default PedidosbaseState