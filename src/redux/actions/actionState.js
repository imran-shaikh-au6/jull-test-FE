import axios from "axios";
// export const firstProduct = (search) => async (dispatch) => {
//     try {
//         const response = await axios.get(
//             `https://forkify-api.herokuapp.com/api/search?q=${search}`
//         );
//         console.log(response.data.recipes);
//         dispatch({ type: "FIRST_PAGE", payload: response.data.recipes });
//     } catch (err) {
//         console.log(err.message);
//     }
// };
// const a = await axios.post(
//                  "https://cors-anywhere.herokuapp.com/https://rental-flatmates.herokuapp.com/user/register",
//                  {
//                      name: "imran shaikhs",
//                      email: "imransnehaGurav@gmail.com",
//                      password: "1",
//                      phone_number: "9423932373",
//                      favourite: [],
//                  }
export const Register = ({ name, email, password }) => async (dispatch) => {
    try {
        const res = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://imgur-jully-test.herokuapp.com/user/register",
            {
                name: name,
                email: email,
                password: password,
            }
        );
        dispatch({ type: "Register", payload: res.data.user });
    } catch (error) {}
};

export const Login = ({ email, password }) => async (dispatch) => {
    try {
        const res = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://imgur-jully-test.herokuapp.com/user/login",
            {
                email: email,
                password: password,
            }
        );
        dispatch({ type: "Login", payload: res.data.token });
    } catch (error) {}
};

export const getImages = () => async (dispatch) => {
    try {
        const res = await axios(
            "https://cors-anywhere.herokuapp.com/https://imgur-jully-test.herokuapp.com/property"
        );
        dispatch({ type: "Images", payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const Logout = (token) => async (dispatch) => {
    try {
        const config = {
            headers: {
                Authorization: token,
            },
            
        };
        console.log(token)
        const data = await axios.post(
            "https://cors-anywhere.herokuapp.com/https://imgur-jully-test.herokuapp.com/user/logout",
            config
        );
        console.log(data.data);
    } catch (error) {
        console.log(error.message);
    }
};
