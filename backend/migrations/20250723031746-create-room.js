'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dormAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Dorm address required!',
          },
          notNull: {
            msg: 'Dorm address required!'
          }
        }
      },
      dormLat: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Dorm location required!'
          },
          notNull: {
            msg: 'Dorm location required!'
          }
        }
      },
      dormLong: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Dorm location required!'
          },
          notNull: {
            msg: 'Dorm location required!'
          }
        }
      },
      roomNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Room number required!'
          },
          notNull: {
            msg: 'Room number required!'
          }
        }
      },
      roomImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Image required!',
          },
          notNull: {
            msg: 'Image required!'
          }
        }
      },
      roomSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Room size required!'
          },
          notNull: {
            msg: 'Room size required!'
          }
        }
      },
      UserLandlordId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};