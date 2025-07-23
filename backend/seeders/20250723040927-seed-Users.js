'use strict';
const fs = require('fs').promises;
const bcrypt = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = JSON.parse(await fs.readFile('./dummy/users.json', 'utf8'));
    data.forEach(e => {
      delete e.id;
      e.password = bcrypt.hide(e.password);
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e
    });
    await queryInterface.bulkInsert('Users',data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null);
  }
};
