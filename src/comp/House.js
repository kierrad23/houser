import React from "react";

export default function House(props) {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Address: {props.address}</p>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Zipcode: {props.zipcode}</p>
      <p>Img: {props.img}</p>
      <p>Mortgage: {props.mortgage}</p>
      <p>Rent: {props.rent}</p>
      <button>Delete</button>
    </div>
  );
}
