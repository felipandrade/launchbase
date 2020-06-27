const programmer = {
    name: 'Felipe',
    age: 40,
    technologies: [
        { name: 'C++', specialty: 'Desktop', }, 
        { name: 'Python', specialty: 'Data Science', }, 
        { name: 'JavaScript', specialty: 'Web/Mobile', },
    ],
}

console.log(`The user ${programmer.name}, has ${programmer.age} years old and use technologies ${programmer.technologies[0].name} in ${programmer.technologies[0].specialty}`);