module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [{
      title: 'picachu',
      cost: '20',
      damage: 'posharpannaya',
      UserId: 1,
      city: 'SPB',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'raichu',
      cost: '20',
      damage: 'posharpannaya',
      UserId: 2,
      city: 'MSK',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'senchru',
      cost: '20',
      damage: 'posharpannaya',
      UserId: 3,
      city: 'SGC',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
