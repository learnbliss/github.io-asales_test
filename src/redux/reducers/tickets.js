const initialState = {

};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 1:
            return {
                ...state,

            };
        default:
            return state
    }
}
