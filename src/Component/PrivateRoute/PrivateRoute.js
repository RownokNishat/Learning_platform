import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../UserContext/UserContext";
export { PrivateRoute };

function PrivateRoute({ children }) {
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    console.log("loading1", loading);
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!user && !loading) {
    console.log("loading2", loading, "user", user);
    return <Navigate to="/login" />;
  } else {
    console.log("elseloading2", loading, "user", user);
    return children;
  }
}
