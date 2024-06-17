// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // URL-encode the license parameter for robustness
  const encodedLicense = encodeURIComponent(license);

  return `[![License](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)](https://opensource.org/licenses/${encodedLicense})`;
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // URL-encode the license parameter for robustness
  const encodedLicense = encodeURIComponent(license);

  return `[License](https://opensource.org/licenses/${encodedLicense})`;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // Capitalize the first letter of the license for better formatting
  const formattedLicense = license.charAt(0).toUpperCase() + license.slice(1);

  return `## License

This project is licensed under the ${formattedLicense} license. See the [License](https://opensource.org/licenses/${encodeURIComponent(license)}) file for details.

`;
}



// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about the project, please contact [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

export default generateMarkdown;