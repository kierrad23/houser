import React, { Component } from "react";
//import House from "./House";
import { getHouses } from "../redux/reducer";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    let listings = this.props.houses.map((e, i) => (
      <div key={i}>
        Name: {e.name}
        Address: {e.address}
        City: {e.city}
        State: {e.state}
        Zipcode: {e.zipcode}
        Img: {e.img}
        Mortgage: {e.mortgage}
        Rent: {e.rent}
      </div>
    ));
    return (
      <div>
        Dashboard
        <button onClick={this.props.getHouses}>Show Listings</button>
        {listings}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getHouses }
)(Dashboard);
