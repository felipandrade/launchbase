const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
];

function checkUserUseCss(user) {
    for( let technologie of user.technologies ) {
        const userUseCss = technologie === 'CSS'
        if (userUseCss) {
            return true;
        }
    }
    return false;
}

for (let user of users) {
    const userWorksWithCss = checkUserUseCss(user);
  
    if (userWorksWithCss) {
      console.log(`The user ${user.name} works with CSS`);
    }
  }
  