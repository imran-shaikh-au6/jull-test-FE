const initialState = {
    data:[]
}

const movieDataReducer = (state=initialState,action) =>{
    const { type,payload } = action
    switch (type) {
        case "TRENDING_VIDEOS":
            return {...state, data:[...state.data,payload]}
        default:
            return state
    }
    

}

export default movieDataReducer