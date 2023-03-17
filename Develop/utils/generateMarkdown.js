// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badmath](https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=GREEN)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[Link to License](https://opensource.org/license/mit/)` 
  }
  else if (license == "Unlicense") {
    return `[Link to License](http://unlicense.org/)` 
  }
  else if (license == "Apache_2.0") {
    return `[Link to License](https://opensource.org/license/apache-2-0/)` 
  }
  else if (license == "GNU_v3") {
    return `[Link to License](https://www.gnu.org/licenses/gpl-3.0)` 
  }
  else if (license == "BSD_3-Clause") {
    return `[Link to License](https://opensource.org/licenses/BSD-3-Clause)` 
  }
  else if (license == "Mozilla-Public-License_2.0") {
    return `[Link to License](https://opensource.org/licenses/MPL-2.0)` 
  }
  else if (license == "None") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None"){
    return ""
  }
  else {
    return `## License
- ${license}
- ${renderLicenseBadge(license)}
- ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions and Contributing](#questions-and-contributing)
- [Tests](#tests)


## Installation
${data.installation}

${renderLicenseSection(data.license)}

## Usage
${data.usage}

## Questions
Have questions? Please contact me at [${data.email}](mailto:${data.email}). Visit my GitHub page at [${data.github}](https://github.com/${data.github}).

## Email
${data.email}

## How to Contribute
${data.contribution}

## Test
${data.test}
`;
}

module.exports = generateMarkdown;
