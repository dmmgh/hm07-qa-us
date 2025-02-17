# Sprint 7 project

The project is dedicated to constructing automated tests for GET, POST, PUT and DELETE requests using the Javascript testing framework Jest

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#licence)

## Installation

1. Open your preferred terminal emulator. If you’re on Windows, use Git Bash

2. Create a directory for the project, if it has not been done already:

- cd ~ # make sure you're in your home directory
- mkdir projects # create a folder called projects
- cd projects # change directory into the new projects folder 

3. Clone the repository

- if you are using HTTPS: git clone https://github.com/username/hm07-qa-us.git
- if you are using SSH: git clone git@github.com:username/hm07-qa-us.git

4. Work with the project locally

- run npm install
- open a standard text editor (VS Code recommended)
- in config.js replace the API URL with the unique link generated after the launch of Urban Grocers server
- use apiDoc: URL /docs/ to check the endpoints

## Usage

- for each type of the request (GET, POST, PUT and DELETE) exists single test file in the folder /test
- the server address and endpoints are set up in config.js file with appropriate variable names, which are then used in the test files
- the tests are run using the command npx jest
- some working tests are commented out, because for the same endpoint there are requests that are slightly different and cannot be run simultaneously, as for putHandlers.test.js there are two requests for existing and non-existing product id. To run a different test comment out the current test and uncomment the appropriate code lines (also in config.js)

## Technologies

This project leverages a variety of technologies and methodologies to achieve its goals:

- **Node.js**: A JavaScript runtime for building fast and scalable server-side applications
- **Jest**: A JavaScript testing framework for unit and integration tests
- **Agile**: An iterative and incremental approach to project management and software development

## Licence

This project is licensed under the MIT License
