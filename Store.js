import React from 'react';
import initialState from './reducers';
import Computer from './Computer'
import projectReducer from './projectReducer';
import rootReducer from './rootReducer';
import reducer from './reducers';
import { applyMiddleware, bindActionCreators } from 'redux';

const createStore = (reducer, initialState) => {
    const [state, dipatch] = useReducer(reducer, initialState);
    return { state, dispatch };
};

const connect = (
    mapStateToProps = () => { },
    mapDispatchToProps = () => { }
) => WrappedComponent => {
    return props => {
        const { dispatch, state } = useContext(Store);
        return (
            <WrappedComponent
                dispatch={dispatch}
                {...mapStateToProps(state, props)}
                {...mapDispatchToProps(dispatch, props)}
            />
        );
    };
};

const compose = (...funcs) => x =>
    funcs.reduceRight((composed, f) => f(composed), x);

const createStore = (reducer, initialState, applyWmicData) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    if (typeof applyWmicData !== "undefined") {
        const WmicData = {
            getState: () => state,
            dipatch: bindActionCreators => dispatch(action)
        };
        const chain = middlewares.map(middleware => (WmicData));
        const enhancedDispatch = compose(...chain)(dispatch);
        return { state, dispatch: enhancedDispatch };
    }
    return { state, dispatch };
};

const customMiddleware = store => next => action => {
    console.log("Ation Triggered");
    console.log(action);
    next(action)
};

const provider = ({ Children }) => {
    const store = createStore(reducer, initialState, [customMiddleware]);
    return <Store.Provider value={store}>{children}</Store.Provider>;
};
export default provider;