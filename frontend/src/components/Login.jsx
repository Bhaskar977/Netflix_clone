import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleStatus = () => {
    setStatus(!status);
  };

  const handleInputChange = (e) => {
    // e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  const { name, email, password } = formData;

  return (
    <div>
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt=""
        />
      </div>
      <form
        className="flex flex-col p-12 w-3/12 my-36 left-0 right-0 mx-auto item-center justify-center absolute rounded-md bg-black opacity-80"
        onSubmit={handleSubmit}
      >
        {status ? (
          <h1 className="text-white text-3xl mb-5 font-bold">Login</h1>
        ) : (
          <h1 className="text-white text-3xl mb-5 font-bold">SignUp</h1>
        )}
        {status ? (
          <>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={password}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
              value={password}
              onChange={handleInputChange}
            />
          </>
        )}
        <button className="bg-red-600 mt-3 p-3 text-white rounded-sm font-medium">
          {status ? "Login" : "SignUp"}
        </button>
        <p className="text-white">
          {status ? "New user?" : "Already have an account?"}
          <span
            className="text-blue-800 ml-1 font-medium cursor-pointer"
            onClick={handleStatus}
          >
            {status ? "SignUp" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
