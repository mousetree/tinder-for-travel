import React from 'react';
import ExperienceShape from '../shapes/Experience';

function ExperienceCard (props) {
  const style = {
    height: 200,
    width: 500,
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    zIndex: props.cardIndex,
    transition: 'transform 3s'
  };
  return (
    <div style={style}>
      <div>{props.title}</div>
      <button className="dislike" onClick={() => props.onDislike(props)}>Dislike</button>
      <button className="like" onClick={() => props.onLike(props)}>Like</button>
    </div>
  )
}

ExperienceCard.propTypes = {
  ...ExperienceShape,
  onLike: React.PropTypes.func.isRequired,
  onDislike: React.PropTypes.func.isRequired
};

export default ExperienceCard;
