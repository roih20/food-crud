import { ISatate } from "../interface/IState";
import { ActionTypes } from "./action-types/action-types";
import { Action } from "./actions/actions";

export const reducer = (state: ISatate, action: Action) => {
    switch(action.type) {
        case ActionTypes.ADD_FOOD:
          const addFood = [...state.foods, action.payload]
          return {...state, foods: addFood}
        case ActionTypes.REMOVE_FOOD:
            const removeFood = state.foods.filter((food) => food.id !== action.payload);
            return {...state, foods: removeFood}
        default: 
           return state

    }

}