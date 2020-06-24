import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
const Profile = (props) => {
  const [firstName, setFirstName] = useState("initialState");
  const [lastName, setLastName] = useState("initialState");
  const [email, setEmail] = useState("initialState");

  useEffect(() => {
    const token = localStorage.usertoken;
    console.log(JSON.stringify(token));
    // const decoded = jwt_decode(token);
    // setFirstName(decoded.firstname);
    // setLastName(decoded.lastname);
    // setEmail(decoded.email);
  });
  return (
    <div style={{ backgroundColor: "white", height: "80vh", padding: "100px" }}>
      <h1>Profile</h1>
      <h2>{props.firstReducer}</h2>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    firstReducer: state.firstReducer,
  };
};
const mapDispatchToProps = () => {};
const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ConnectedProfile;
