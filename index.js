const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const splitTutorial = tutorial.split(" ").map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1)
    });
    return splitTutorial.join(" ");
    
  });
}

// const newTutorials = tutorials.map((tutorial) => {
//   const splitTutorial = tutorial.split(" ").map((item) => {
//     return item.charAt(0).toUpperCase() + item.slice(1)
//   });
//   return splitTutorial.join(" ");
  
// });

console.log(newTutorials)