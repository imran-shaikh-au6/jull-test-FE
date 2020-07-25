const initialState = {
    user: [],
    login: JSON.parse(localStorage.getItem("imgur")) || [],
    image: [],
};

const userReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case "Register":
            return { ...state, user: [...state.user, payload] };
        case "Login":
            const userlocal = JSON.stringify(payload);
            localStorage.setItem("imgur", userlocal);
            return { ...state, login: payload };
        case "Images":
            return { ...state, image: payload };
        case "LOG_OUT":
             localStorage.removeItem("imgur");
            return { ...state, login: []};
        default:
            return state;
    }
};
export default userReducer;
