// TODO: Include packages needed for this application
import('inquirer').then((inquirer) => {
const generateMarkdown = require('./utils/generateMarkdown.cjs');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  // Add more questions for other sections of the README
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
 fs.writeFile(fileName, data, err => {
   if (err) {
     console.error(err);
     return;
   }
   console.log('README.md generated successfully!');
});
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
});