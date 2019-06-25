import { inititalState } from "./reducers";

export const defaultState   =   {}

const defaultReducer    =   (old,newState)=>newState

export const useTableState  =   (
    inititalState   =   {},
    overrides   =   {},
    {reducers   =   defaultReducer,useState: userUseState}  =   { }
)