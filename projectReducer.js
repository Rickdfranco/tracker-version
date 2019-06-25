const projectReducer    =   (state  =   [],addUser)  =>{
    switch (addUser.types){
        case addUser:
        // vvv sending data to applications being stored
            return[...state, addUser.payload];
    }
};

export default projectReducer;