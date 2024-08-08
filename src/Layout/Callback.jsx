import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (accessToken) {
        localStorage.setItem("spotifyToken", accessToken);
      }

      if (refreshToken) {
        localStorage.setItem("spotifyRefreshToken", refreshToken);
      }

      navigate("/");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
