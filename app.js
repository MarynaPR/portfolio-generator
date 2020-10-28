// profileDataArr.forEach(profileItem => console.log(profileItem));
// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());
//usetemplate literals to embed JavaScript expressions into the string
//are enclosed by backticks (`) instead of double or single quotes.

//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));
const generatePage = require('./src/page-template.js');
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//replace with:
const [name, github] = profileDataArgs;
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
// };

//console.log(generatePage('Jane', 'janehub'));
// console.log(name, github);
// console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});