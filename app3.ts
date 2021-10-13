import { Reducer, Action } from './ngrx-fake/ngrx';
import { reducer } from './contador/contador.reducer';


export class Store<T>{

    constructor(private reducer:Reducer<T>, private state:T){


    }

    getState(){

        return this.state;
    }

    dispatch(action:Action){

        this.state = this.reducer(this.state, action)
    }
}

const store = new Store(reducer, 10);

console.log(store.getState());