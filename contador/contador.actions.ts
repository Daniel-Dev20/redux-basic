import {Action} from '../ngrx-fake/ngrx';



//USO DEL REDUCER
export const incrementados:Action = {

    type:'INCREMENTAR'
}

export const multiplicarAction:Action = {

    type: 'MULTIPLICAR',
    payload: 2
}

export const dividirAction:Action  = {

    type: 'DIVIDIR',
    payload: 2
}

export const resetAction:Action = {

    type: 'RESET'
}