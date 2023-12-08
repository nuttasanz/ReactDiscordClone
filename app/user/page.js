"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const getUser = async () => {
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3009/api/user", {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const logout = async () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <>
      <div>{user?.createdAt}</div>
      <div>{user?.email}</div>
      <div>{user?.userName}</div>
      <div>{user?.displayName}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default User;
