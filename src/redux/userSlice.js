import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => { // try catch kullanmaya gerek yok. cunku bu islemleri createAsyncThunk otomatik yapiyor

    const res = await axios.post("http://localhost:8080/api/users/123/update", user) // 1.adres  2.data(burda user mesela)

    return res.data
})

/** 3) createAsyncThunk */
export const userSlice = createSlice({ // bunun icinde state ve actionlari yaziyorum
    name: 'user', // bu store'un adi
    initialState: {
        userInfo: {
            name: 'john',
            email: 'john@gmail.com',
        },
        pending: null,
        error: false,
        deleted: false,
    }, // ayni sekilde name ve initialState'lerini yazarak baska storelar yazabilirim 
    // action kismi
    reducers: { // reducers icinde action'lari yaziyorum. burda istedigim kadar action yazabilirim
        remove: (state) => {
            state.userInfo = {}
            state.deleted = true
            state.pending = null
            state.error = false
        }
    },
    extraReducers: { // pending,fulfilled,rejected metotlari createAsyncThunk'dan geliyor
        // disarda yani yukarda createAsyncThunk ile yazdigim fonksiyonu bu sekilde kullaniyorum

        [updateUser2.pending]: (state) => {
            state.pending = true
            state.deleted = false
        },
        [updateUser2.fulfilled]: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },
        [updateUser2.rejected]: (state) => {
            state.pending = null
            state.error = true
        },
        // mesela buraya delete metodu icinde ayni sakilde yazabilirim
    }
})


/** 2) custom reducers
export const userSlice = createSlice({ // bunun icinde state ve actionlari yaziyorum
    name: 'user', // bu store'un adi
    initialState: {
        userInfo: {
            name: 'john',
            email: 'john@gmail.com',
        },
        pending: null,
        error: false,
        deleted: false,
    }, // ayni sekilde name ve initialState'lerini yazarak baska storelar yazabilirim 
    // action kismi
    reducers: { // reducers icinde action'lari yaziyorum. burda istedigim kadar action yazabilirim
        updateStart: (state) => { // burdaki state initialState. action.payload ile bu ruducers'lari kullandigim yerden gonderdigim veriler geliyor
            state.pending = true
            state.deleted = false
        },
        updateSuccess: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },
        updateError: (state) => {
            state.pending = null
            state.error = true
        },
        remove: (state) => {
            state.userInfo = {}
            state.deleted = true
            state.pending = null
            state.error = false
        }
    },
})
*/


/** // 1) api'siz versiyon

export const userSlice = createSlice({ // bunun icinde state ve actionlari yaziyorum
    name: 'user', // bu store name
    initialState: {
        name: 'john',
        email: 'john@gmail.com'
    }, // ayni sekilde name ve initialState'lerini yazarak baska storelar yazabilirim 
    // action kismi
    reducers: { // reducers icinde action'lari yaziyorum. burda istedigim kadar action yazabilirim
        update: (state, action) => { // burdaki state initialState. action.payload ise Update.jsx'den gelen username ve email
            // state.name = 'Hello ' + action.payload.name // state'deki name'in degerini gelen name degeri ile degistiriyorum
            state.name = action.payload.name // state'deki name'in degerini gelen name degeri ile degistiriyorum
            state.email = action.payload.email // state'deki email'in degerini gelen email degeri ile degistiriyorum
        },
        remove: (state) => (state = {})
    },
})
*/

export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions // action'lari bu sekilde export ediyorum. baska bir action daha olsaydi ayni sekilde export edecektim. 
//kullanamk istedigim yerde import edip kullaniyorum

// 1) api'siz versiyon
/* export const { update, remove } = userSlice.actions */ // action'lari bu sekilde export ediyorum. baska bir action daha olsaydi ayni sekilde export edecektim. 
//kullanamk istedigim yerde import edip kullaniyorum

export default userSlice.reducer