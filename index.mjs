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
    name: 'description',
    message: 'Type a description of your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Whats the usage iformation?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What email would you like to be contacted to?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is your license?',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0','BSD-2-Clause','BSD-3-Clause',
      'MPL-2.0', 'LGPL-3.0', 'AGPL-3.0', 'AGPL-3.0'],
  },
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
  inquirer.prompt(questions).then((answers) => {
    console.log('Collected Answers:', answers); // Debugging line
    const markdown = generateMarkdown(answers);
    console.log('Generated Markdown:', markdown); // Debugging line
    fs.writeFileSync('README.md', markdown, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('README.md has been created successfully.');
      }
    });
  });
}
// Function call to initialize app
init();