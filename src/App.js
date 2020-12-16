import React from 'react';
import VehicleContainer from './Containers/VehicleContainer';
import SearchForm from './Components/SearchForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Welcome to Vroom !</h1>
        <VehicleContainer />
      </>
    );
  }
}

export default App;
