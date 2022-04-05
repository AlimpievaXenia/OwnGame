module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        topic: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Животные',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Интересные факты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'Города',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        topic: 'История',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
