import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/Avatar.png";
import "./login.css";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
// import UserData from "../UserData";
const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    try {
      const api = axios.create({
        baseURL: "https://railsapplications.herokuapp.com/usersupers/login",
      });
      const login_user = {
        email: email,
        password: password,
      };
      const resp = await api.post("", login_user);

      if (resp.status === 200) {
        localStorage.setItem("Authorization", resp.data.token);
        addToast("Login Sussefully", {
          appearance: "success",
          autoDismiss: true,
        });
        navigate("/userdata");
        return;
      }
    } catch (error) {
      addToast("Login Failed", {
        appearance: "warning",
        autoDismiss: true,
      });
      return;
    }
  };

  return (
    <div className="main-container">
      <div className="column">
        <div className="avatar-card">
          <img src={Avatar} className="usr-img" alt="hero-img.png" />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter Email"
            className="form-input"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Password"
            className="form-input"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn-custom" onClick={LoginUser}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
