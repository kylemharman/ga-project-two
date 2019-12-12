import React from "react";
import axios from 'axios'

class App extends React.Component {
  state = {
    conferences: []
  };

  componentDidMount() {
    axios.get('/api/conferences')
    .then(response => {
      this.setState({conferences: response.data})
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const conferenceElements = this.state.conferences.map((conf, id) => <li key={id}>{conf.name}, {conf.city}</li>);
    return (
      <div className="App">
        <header className="App-header">
          Upcoming developer conferences in 2020
        </header>
        <ul>{conferenceElements}</ul>
      </div>
    );
  }
}

export default App;
