let mockedExperiences;

export default {
  getExperiences: function () {
    return new Promise((resolve) => {
      resolve(mockedExperiences);
    })
  }
}

mockedExperiences = [
  {title: 'Amsterdam with Adam'},
  {title: 'Tebogo goes to Taiwan'},
  {title: 'Yash does Yemen'}
];