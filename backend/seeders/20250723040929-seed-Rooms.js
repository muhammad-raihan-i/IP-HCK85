'use strict';
const fs = require('fs').promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = JSON.parse(await fs.readFile('./dummy/rooms.json', 'utf8'));
    data.forEach(e => {
      delete e.id;
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e
    });
    await queryInterface.bulkInsert('Rooms',data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null);
  }
};
