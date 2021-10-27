module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      login: 'fedor',
      email: 'fedor@mail',
      password: 'password',
      city: 'SPB',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'seryoga',
      email: 'seryoga@mail',
      password: 'password',
      city: 'MSK',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      login: 'jora',
      email: 'jora@mail',
      password: 'password',
      city: 'SGC',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
