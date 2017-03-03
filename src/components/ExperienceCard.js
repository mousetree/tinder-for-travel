import React from 'react';
import ExperienceShape from '../shapes/Experience';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function ExperienceCard (props) {
  return (
    <Card>
      <CardTitle title={props.title} subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Dislike" onClick={() => props.onDislike(props)}/>
        <FlatButton label="Like" onClick={() => props.onLike(props)}/>
      </CardActions>
    </Card>
  )
}

ExperienceCard.propTypes = {
  ...ExperienceShape,
  onLike: React.PropTypes.func.isRequired,
  onDislike: React.PropTypes.func.isRequired
};

export default ExperienceCard;
