import React, { useEffect, useState } from "react";
import "../styles/ListUser.css";
import { getUsers } from "../actions/GetUser";
const ListUser = (props) => {
  const headers = ["index", "name", "email", "age", "city", "password"];
  const [data, setData] = useState([]);
  // get data
  useEffect(() => {
    console.log("call n times");
    const rs = getUsers();
    rs.then((users) => setData(users.data));
  }, []);
  const handleUpDate = () => {};
  const handleDelete = () => {};
  return (
    <>
      <h2>Table With Rounded Borders</h2>

      <p>
        Use the CSS border-radius property to add rounded corners to the
        borders.
      </p>

      <table style={{ width: 100 }}>
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>email</th>
            <th>age</th>
            <th>city</th>
            <th>password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(function (item, idx) {
            return (
              <tr key={idx}>
                <td>{item.index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.password}</td>
                <td>
                  <button>update</button>
                </td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ListUser;
