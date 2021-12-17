import React, { useContext, useReducer } from 'react'
import { IFood } from '../interface/IFood'
import { ActionTypes } from '../reducer/action-types/action-types'
import { reducer } from '../reducer/reducer'
import Home from './Home'

interface IContextState {
    foods: IFood[];
    addFood: (food: IFood) => void
    removeFood: (id: number) => void
}

const AppProvider =  React.createContext({} as IContextState)

const defaultState = {
    foods: []
}

const MenuProvider = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const addFood = (food : IFood) => {
        dispatch({type: ActionTypes.ADD_FOOD, payload: food })
    }
    const removeFood = (id: number) => {
        dispatch({type: ActionTypes.REMOVE_FOOD, payload: id})
    }

    return (
        <AppProvider.Provider value={{...state , addFood, removeFood}}>
            <Home />
        </AppProvider.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppProvider)
}

export  {MenuProvider, AppProvider}
