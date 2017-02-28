import React from 'react';
import {shallow} from 'enzyme';
import ExperienceCard from './ExperienceCard';

const experienceMock = {
  title: 'MockJapan'
};

it('should display the card title', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.contains('MockJapan')).toEqual(true);
});

it('should contain a `Like` button', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.containsMatchingElement(<button>Like</button>)).toEqual(true);
});

it('should contain a `Dislike` button', () => {
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.containsMatchingElement(<button>Dislike</button>)).toEqual(true);
});

it('should call the `onLike` function with the experience object as the arg when the `Like` button is clicked', () => {
  let onLikeStub = jest.fn();
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={onLikeStub} onDislike={jest.fn()}/>);
  const button = wrapper.find('button.like').first(); // FIXME
  expect(onLikeStub).not.toHaveBeenCalled();
  button.simulate('click');
  expect(onLikeStub).toHaveBeenCalledWith(
    expect.objectContaining(experienceMock)
  );
});

it('should call the `onDislike` function with the experience object as the arg when the `Dislike` button is clicked', () => {
  let onDislikeStub = jest.fn();
  const wrapper = shallow(<ExperienceCard {...experienceMock} onLike={jest.fn()} onDislike={onDislikeStub}/>);
  const button = wrapper.find('button.dislike').first(); // FIXME
  expect(onDislikeStub).not.toHaveBeenCalled();
  button.simulate('click');
  expect(onDislikeStub).toHaveBeenCalledWith(
    expect.objectContaining(experienceMock)
  );
});