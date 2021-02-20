### Workflow 2 Course Assignment
# Mathias Kønye

## Getting started

* To open project via parcel, open terminal and put in "parcel src/index.html". This will also bundle the project into dist folder.
* To get typescript to watch over typescript code and compile it(in VSCode), click on "Terminal->Run Task->tsc:watch"
* Optionally "tsc filename.ts --watch" into terminal.
* "npm run test" to check jest test files.
* When you make a pull request via dev branch in github it will automatically run a GitHub Actions test and will run "npm run test".

## Build Process

First I made a package.json file with the command "npm init -y". This will auto fill some of the dependencies. Next thing I did was to install TypeScript with install -g typescript -d. This installed Typescript globally and put it in devDependecies.
I installed Jest with "npm install --save-dev jest", and "npm add --dev babel-jest @babel/core @babel/preset-env" this installed Babel. Next I ran "npm add --dev @babel/preset-typescript" this would help me make jest test units with TypeScript along with a file I created with the name "babel.config.js" which I put in the root of my project. There I had to copy and paste some module exports presets. Then I added "npm add --dev @types/jest".

With this I first made the project tidy by making new folders. I made an src folder and put in all css/html and js files in there within the right folders. Then I converted the js files to typescript and made some unit tests with jest.