import React, { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/profile?email=zarin4503@gmail.com");
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Account Page</h2>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Account Created: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Account;
