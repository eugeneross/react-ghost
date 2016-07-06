import React, { Component } from 'react';
import { Link } from 'react-router';

  //const Home = React.createClass({
class Home extends Component {

constructor(props) {
  super(props);
  this.state = {
    post: false,
  };
}

componentDidMount() {
  const { postId } = this.props;
  // load from API
  got(`http://api.ghost.org/posts/${postId}`).then(resp, () => {
    // set the API response to the state
    this.setState({
      post: resp.body,
    });
  });
}
render() {
  // retrieve the post from the state
  const { post } = this.state;
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.html}</div>
    </div>
  );
}
}

export default Home;
