import { useSelect } from "@mui/base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_ACTION_TYPE } from "../../store/User/reducer";
import { loginUser } from "../../store/User/selector";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const updatedUser = useSelector(loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch({ type: USER_ACTION_TYPE.LOG_OUT_STATUS, payload: {} });
    navigate("/");
  };
  return (
    <div>
      <div>
        {`welcome ${updatedUser.username}`}
        <button onClick={logoutHandler}>log out</button>
      </div>
    </div>
  );
}

export default Home;
