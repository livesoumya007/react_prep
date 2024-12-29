import { useEffect } from "react";
import "../App.css";
import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  firstName?: string;
  lastName?: string;
}

interface UserResponse {
  users: User[];
}

const URL: string = "https://dummyjson.com/users";

function CustomHookUse() {
  const { data, error, getData, loading } = useFetch<UserResponse>(URL);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred: {error}</p>;
  }

  if (data && data.users && data.users.length > 0) {
    return (
      <div>
        {data.users.map((user) => (
          <p key={user.id}>
            {user.firstName} {user.lastName}
          </p>
        ))}
      </div>
    );
  }

  return <p>No users found.</p>;
}

export default CustomHookUse;
