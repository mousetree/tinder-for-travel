import React, { Component } from 'react';
import ExperienceStack from './components/ExperienceStack';
import API from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      likedExperiences: []
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount () {
    API.getExperiences().then(experiences => {
      this.setState({
        experiences: experiences
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Tinder for Travel</h1>
        <p>
          You have liked {this.state.likedExperiences.length} things
        </p>
        <ExperienceStack
          experiences={this.state.experiences}
          onLike={this.handleLike}
          onDislike={this.handleDislike}
        />
      </div>
    );
  }

  handleLike (experience) {
    this.setState(prevState => {
      return {
        likedExperiences: [
          ...prevState.likedExperiences,
          experience
        ],
        experiences: prevState.experiences.slice(1, prevState.experiences.length)
      }
    });
  }

  handleDislike (experience) {
    this.setState(prevState => {
      return {
        experiences: prevState.experiences.slice(1, prevState.experiences.length)
      }
    })
  }
}

export default App;
