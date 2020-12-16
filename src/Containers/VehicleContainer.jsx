import React, { Component } from 'react';
import Vehicle from '../Components/Vehicle';
import SearchForm from '../Components/SearchForm';

class VehicleContainer extends Component {
  state = {
    api: [],
    searchTerm: '',
  };

  componentDidMount() {
    fetch('http://localhost:4000/vehicles')
      .then((r) => r.json())
      .then((data) => {
        this.setState({ api: data });
      });
  }

  // we want to render all vehicles from our api and create Vehicle components
  // console.log(props.vehicles);
  arrayOfVehicles = () => {
    let filteredArray = this.state.api.filter((vehicle) =>
      vehicle.make.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return filteredArray.map((vehicle) => (
      <Vehicle
        key={vehicle.id}
        make={vehicle.make}
        model={vehicle.model}
        year={vehicle.year}
        trim={vehicle.trim}
        image={vehicle.image}
        favorite={vehicle.favorite}
      />
    ));
  };

  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <>
        <SearchForm
          searchTerm={this.state.searchTerm}
          changeHandler={this.searchChangeHandler}
        />
        <div className="vehicleCont">{this.arrayOfVehicles()}</div>
      </>
    );
  }
}

export default VehicleContainer;
