import React, { Component } from 'react';
import { Link } from 'react-router';

  class App extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <header>
            <Link to="/">Home</Link> |
            <Link to="styleguide">StyleGuide</Link> |
            <Link to="uploader">Uploader</Link>
          </header>
          {this.props.children}

        </div>
      )
    }
};

export default App;
