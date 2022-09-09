import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/constants/Constants";

const Home = () => {
  const [email, setEmail] = useState("");
    const handleEmail = event => {
        setEmail(event.target.value);

        console.log('value is:', event.target.value);
    }

  const [password, setPassword] = useState("");
    const handlePassword = event => {
        setPassword(event.target.value);

        console.log('value is:', event.target.value);
    };

  const onLogin = () => {
    // window.localStorage.setItem("token", "dsgafdasf");
    // window.localStorage.setItem("user", "Paul barosanu'");
    // window.location.pathname = '/admin';
    axios
      .post(`${baseUrl}/admins/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response ", response.data);
        window.localStorage.setItem("token", response.data.accessToken);
        window.location.pathname = "/admin";
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      <h2>Home (Public)</h2>
      <div>
        <form className="home">
          <label htmlFor="Email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleEmail} />
          <label htmlFor="Password">Password</label>
          <input
            type="passwod"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </form>
        <button type="button" onClick={onLogin} disabled={false}>
          Sign In
        </button>
      </div>
    </>
  );
};
    
export default Home;
