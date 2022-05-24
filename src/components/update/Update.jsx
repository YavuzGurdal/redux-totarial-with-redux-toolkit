import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, updateUser2 } from "../../redux/userSlice";
//import { updateUser } from "../../redux/apiCalls";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error, deleted } = useSelector((state) => state.user) // bu sekilde destructuring yapabiliriz
  //const user = useSelector((state) => state.user.userInfo)
  // useSelector metodu ile store'a dolayisiyla store icindeki herseye ulasabiliyorum

  const dispatch = useDispatch() // dispatch ile action'lari cagiriyorum

  /** 3) createAsyncThunk */
  const handleUpdate = (e) => {
    e.preventDefault()

    if (name || email) {
      dispatch(updateUser2({ name, email }))// burda updateUser'a verdigimiz parametreleri action.payload diyerek alacagiz
    }

    setName('')
    setEmail('')
  }

  /* 2) custom reducers
  const handleUpdate = (e) => {
    e.preventDefault()

    if (name || email) {
      updateUser({ name, email }, dispatch) // burda updateUser'a verdigimiz parametreleri action.payload diyerek alacagiz
    }

    setName('')
    setEmail('')
  }
  */

  /* 1) apisiz versiyon 
  const handleUpdate = (e) => {
    e.preventDefault()

    // dispatch'le payload'u bu sekilde gonderiyoruz
    dispatch(update({ name, email })) // burda update'e verdigimiz parametrleri action.payload diyerek alacagiz

    setName('')
    setEmail('')
  }
  */

  const handleDelete = (e) => {
    e.preventDefault()

    // dispatch'le payload'u bu sekilde gonderiyoruz
    dispatch(remove()) // burda update'e verdigimiz parametrleri action.payload diyerek alacagiz
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            {
              (userInfo.name || userInfo.email) &&
              <div className="formItem">
                <label>Profile Picture</label>
                <div className="profilePic">
                  <img
                    className="avatar"
                    src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <span className="change">Change</span>
                </div>
              </div>
            }
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                value={name}
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                value={email}
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {error && <span className="error">Something went wrong!</span>}
            {pending === false && <span className="success">Account has been updated!</span>}
            {deleted && <span className="error">Account has been deleted!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
