import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [user1, setUser1] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetUser1 = async () => {
    setLoading(true);
    try {
      let response = await axios.get("http://localhost:5000/users");
      setUser1(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetUser1();
  }, []);

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {loading ? (
                <div>Loading....</div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>uuid</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user1.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{user.uuid}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
