import { ActionTypes } from "../action-types/action-types";

export interface Action {
    type: ActionTypes;
    payload?: any
}