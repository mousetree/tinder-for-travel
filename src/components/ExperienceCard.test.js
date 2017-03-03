import React from 'react';
import {shallow} from 'enzyme';
import ExperienceCard from './ExperienceCard';
import {CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const experienceMock = {
  title: 'MockJapan'
};

it('should display the experience title', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  const cardTitle = wrapper.find(CardTitle).first();
  expect(cardTitle.props().title).toEqual(experienceMock.title);
});

it('should contain a `Like` button', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.find(FlatButton).at(1).props().label).toEqual('Like');
});

it('should contain a `Dislike` button', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.find(FlatButton).at(0).props().label).toEqual('Dislike');
});

it('should call the `onLike` function with the experience object as the arg when the `Like` button is clicked', () => {
  let onLikeStub = jest.fn();
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={onLikeStub} onDislike={jest.fn()}/>);
  const button = wrapper.find(FlatButton).at(1); // FIXME
  expect(onLikeStub).not.toHaveBeenCalled();
  button.simulate('click');
  expect(onLikeStub).toHaveBeenCalledWith(
    expect.objectContaining(experienceMock)
  );
});

it('should call the `onDislike` function with the experience object as the arg when the `Dislike` button is clicked', () => {
  let onDislikeStub = jest.fn();
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={onDislikeStub}/>);
  const button = wrapper.find(FlatButton).at(0); // FIXME
  expect(onDislikeStub).not.toHaveBeenCalled();
  button.simulate('click');
  expect(onDislikeStub).toHaveBeenCalledWith(
    expect.objectContaining(experienceMock)
  );
});