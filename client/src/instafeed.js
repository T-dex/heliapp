import React, { Component } from "react";

class InstaFeed extends Component {
  componentDidMount() {
    fetch(
      "https://api.instagram.com/oauth/authorize/?client_id=c7ab68d32ca94fdd86beb1a9453f71cf "
    )
      .then(results => {
        const reader = results.body.getReader();
        return results.body;
      })
      .then(results => {
       
      });
  }
  render() {
    return <h1>""</h1>;
  }
}

export default InstaFeed;
