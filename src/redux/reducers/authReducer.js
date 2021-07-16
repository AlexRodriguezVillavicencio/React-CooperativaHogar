import { FIN_CARGANDO_LOGIN, INICIO_CARGANDO_LOGIN, SET_LOGIN } from "../types/types";

const innitialState = {
    autenticado: false,
    token: null,
    usuario_nombre: null,
    cargando: true
}

export const authReducer = (state= innitialState,action) => {
    switch (action.type) {
        case INICIO_CARGANDO_LOGIN:
            return{ 
                ...state,
                cargando: true
        };
        
        case FIN_CARGANDO_LOGIN:
            return{ 
                ...state,
                cargando: false
        };
        
        case SET_LOGIN:
            return{ 
                ...state,
                cargando: true
        };
            
    
        default:
            return state;
    }
} 