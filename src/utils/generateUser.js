const {faker} = require('@faker-js/faker');
const generateProduct = require('./generateProduct');

const generateUser = ()=>{

    const cartContent = []
    const numberOfProducts = faker.number.int({min: 1, max:5});

    for (let i = 0; i < numberOfProducts; i++) {
        cartContent.push(generateProduct()) 
    }

    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email(),
        cart: cartContent,
        role: faker.helpers.arrayElement(['cliente', 'vendedor']),
        isPremium: faker.datatype.boolean(),
        job: faker.person.jobTitle()
    }
}

module.exports = generateUser;