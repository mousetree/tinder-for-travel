import React from 'react';
import {shallow} from 'enzyme';
import ExperienceStack from './ExperienceStack';
import ExperienceCard from './ExperienceCard';

it('should display a message when there are no experiences', () => {
  const wrapper = shallow(<ExperienceStack experiences={[]} onLike={jest.fn()} onDislike={jest.fn()}/>);
  expect(wrapper.find(ExperienceCard).length).toEqual(0);
  expect(wrapper.contains(<p>There are no experiences</p>)).toEqual(true);
});

it('should display an <ExperienceCard> for the first experience in the stack', () => {
  const experiencesMock = [
    {title: 'Travel to Japan'},
    {title: 'India with Friends'},
  ];
  const wrapper = shallow(<ExperienceStack experiences={experiencesMock} onLike={jest.fn()} onDislike={jest.fn()}/>);
  const experienceCards = wrapper.find(ExperienceCard);
  const firstExperienceCard = experienceCards.first();

  expect(experienceCards.length).toEqual(1);
  expect(firstExperienceCard.props().title).toEqual(experiencesMock[0].title);

});

