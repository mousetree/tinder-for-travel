import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import ExperienceStack from './components/ExperienceStack';
import API from './api';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <App/>
  );
});

it('should display an <ExperienceStack />', () => {
  expect(wrapper.find(ExperienceStack).length).toEqual(1);
});

it('should display an `h1` element for the title', () => {
  expect(wrapper.find('h1').length).toEqual(1);
});

it('should start with an empty `state.likedExperiences`', () => {
  expect(wrapper.state().likedExperiences.length).toEqual(0);
})

describe('handleLike()', () => {

  it('should add the new experience to `state.likedExperiences`', () => {
    expect(wrapper.state().likedExperiences.length).toEqual(0);
    const mockExperience = {title: 'Mock in Moscow'};
    wrapper.instance().handleLike(mockExperience);
    expect(wrapper.state().likedExperiences.length).toEqual(1);
    expect(wrapper.state().likedExperiences[0]).toEqual(mockExperience);
  });

  it('should pop the first experience from `state.experiences`', (done) => {
    injectTapEventPlugin();
    const statefulWrapper = mount(<MuiThemeProvider>
      <App/>
    </MuiThemeProvider>);
    API.getExperiences().then((experiences) => {
      expect(statefulWrapper.state().experiences.length).toEqual(experiences.length);
      const mockExperience = {title: 'Mock in Moscow'};
      statefulWrapper.instance().handleDislike(mockExperience);
      expect(statefulWrapper.state().experiences.length).toEqual(experiences.length - 1);
      expect(statefulWrapper.state.experiences[0].title).not.toEqual(experiences[0].title);
      done();
    }).catch(done);
  });
});

describe('handleDislike()', () => {

  it('should *not* add the new experience to `state.likedExperiences`', () => {

    expect(wrapper.state().likedExperiences.length).toEqual(0);
    const mockExperience = {title: 'Mock in Moscow'};
    wrapper.instance().handleDislike(mockExperience);
    expect(wrapper.state().likedExperiences.length).toEqual(0);
  });

  it('should pop the first experience from `state.experiences`', (done) => {

    const wrapper = mount(<MuiThemeProvider><App/></MuiThemeProvider>);
    API.getExperiences().then((experiences) => {
      expect(wrapper.state().experiences.length).toEqual(experiences.length);
      const mockExperience = {title: 'Mock in Moscow'};
      wrapper.instance().handleDislike(mockExperience);
      expect(wrapper.state().experiences.length).toEqual(experiences.length - 1);
      expect(wrapper.state.experiences[0].title).not.toEqual(experiences[0].title);
      done();
    }).catch(done);
  });
});
