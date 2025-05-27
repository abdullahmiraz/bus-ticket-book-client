import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for required tokens
    const userToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userToken="));
    const userEmail = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userEmail="));
    const adminToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="));

    if (!userToken || !userEmail) {
      navigate("/login");
      return;
    }

    // Check if user is admin
    if (!adminToken) {
      navigate("/");
      return;
    }

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return children;
};

export default AdminRoute;
