import React from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceShape from '../shapes/Experience';

function ExperienceStack (props) {
  // const experience = props.experiences[0];
  return (
    <div>
      <h3>Experiences you can have:</h3>
      {
        props.experiences.length ? props.experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={`card-index-${index}`} {...experience}
              cardIndex={props.experiences.length - index}
              onLike={props.onLike}
              onDislike={props.onDislike}/>
            )
        }) :
        <p>There are no more experiences</p>
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
