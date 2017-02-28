import React from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceShape from '../shapes/Experience';

function ExperienceStack (props) {
  const experience = props.experiences[0];
  return (
    <div>
      <h3>This is the stack</h3>
      {
        props.experiences.length ?
          <ExperienceCard {...experience} onLike={props.onLike} onDislike={props.onDislike}/> :
          <p>There are no experiences</p>
      }
    </div>
  )
}

ExperienceStack.propTypes = {
  experiences: React.PropTypes.arrayOf(
    React.PropTypes.shape(ExperienceShape)
  ),
  onLike: React.PropTypes.func.isRequired,
  onDislike: React.PropTypes.func.isRequired
};

export default ExperienceStack;
