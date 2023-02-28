import React, { useState, useEffect } from "react";
import userManager from "./oidc";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setIsAuthenticated(true);

        // Store the user information in the state
        setUser({
          name: user.profile.name,
          role: user.profile.role,
          tenant: user.profile.tenant,
        });
      }
    });
  }, []);

  const handleLogin = () => {
    userManager.signinRedirect();
  };

  const handleLogout = () => {
    userManager.signoutRedirect();
  };

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>

      {user.role === "admin" && <div>// Render components for admin users</div>}

      {user.role === "editor" && user.tenant === "abc" && (
        <div>// Render components for editor users in tenant abc</div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
