// TODO: Include packages needed for this application
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.mjs'; // Assuming you renamed this file as well to .mjs

// Dynamically import inquirer
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Type a description of your project?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  // Add more questions for other sections of the README
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} generated successfully!`);
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();