import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Auth0Provider
      domain="dev-5eky7gcis28pam3d.us.auth0.com"
      clientId="ufGCOG64Wi01O9PPhNCwwIqx5jEAZgFN"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
);
