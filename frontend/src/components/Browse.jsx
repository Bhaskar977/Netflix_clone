import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Browse = () => {
  const { user } = useSelector((store) => store.app);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <div>Browse</div>;
};

export default Browse;
