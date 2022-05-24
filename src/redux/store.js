import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({ /* slice kismini store icinde aliyorum ve store hazir hale geliyor. 
                                   bunu import ettigim herhangi bir yerden bu store'a ulasmis oluyorum */
    reducer: {
        user: userReducer,
    }
})