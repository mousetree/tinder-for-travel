import React, { Component } from 'react';
import ExperienceStack from './components/ExperienceStack';
import LinearProgress from 'material-ui/LinearProgress';
import API from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      likedExperiences: [],
      count: 0,
      experienceCount: 0
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount () {
    API.getExperiences().then(experiences => {
      this.setState({
        experiences: experiences,
        experienceCount: experiences.length
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Tinder for Travel</h1>
        <LinearProgress
          mode="determinate"
          value={this.state.count / this.state.experienceCount * 100}
        />
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
        count: prevState.count + 1,
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
        count: prevState.count + 1,
        experiences: prevState.experiences.slice(1, prevState.experiences.length)
      }
    })
  }
}

export default App;
