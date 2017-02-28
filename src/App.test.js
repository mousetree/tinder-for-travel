import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import ExperienceStack from './components/ExperienceStack';
import API from './api';

it('should display an <ExperienceStack />', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find(ExperienceStack).length).toEqual(1);
});

it('should display an `h1` element for the title', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h1').length).toEqual(1);
});

it('should start with an empty `state.likedExperiences`', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.state().likedExperiences.length).toEqual(0);
})

describe('handleLike()', () => {

  it('should add the new experience to `state.likedExperiences`', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().likedExperiences.length).toEqual(0);
    const mockExperience = {title: 'Mock in Moscow'};
    wrapper.instance().handleLike(mockExperience);
    expect(wrapper.state().likedExperiences.length).toEqual(1);
    expect(wrapper.state().likedExperiences[0]).toEqual(mockExperience);
  });

  it('should pop the first experience from `state.experiences`', () => {
    const wrapper = shallow(<App/>);
    // TODO: mock me?
  });
});
