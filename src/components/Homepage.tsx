import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Dashboard";

const Homepage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <div className="landing-page">
            <div className="content">
              <h1>Welcome To My Assignment Project!</h1>
              <p>
                Hi, I'm Saptarshi Maitra, a passionate web developer with
                experience in React. This is a todo app with a Dashboard built
                in. Please Login in order to view the dashboard.
              </p>
              <button className="btn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
