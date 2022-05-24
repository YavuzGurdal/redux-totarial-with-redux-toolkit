import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice";


export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());

    try { // async'li birsey yaziliyorsa mutlaka try catch kullanilmali
        const res = await axios.post("http://localhost:8080/api/users/123/update", user) // 1.adres  2.data(burdaki data user)

        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError())
    }

}