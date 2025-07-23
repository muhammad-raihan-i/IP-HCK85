'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Fullname required!' 
          },
          notNull: {
            msg: 'Fullname required!'
          }
        },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Username required!'
          },
          notNull: {
            msg: 'Username required!'
          }
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Email required!'
          },
          notNull: {
            msg: 'Email required!'
          },
          isEmail: {
            msg: 'Invalid email format!'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Password required!'
          },
          notNull: {
            msg: 'Password required!'
          }
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phone number required!'
          },
          notNull: {
            msg: 'Phone number required!'
          }
        }
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Birthdate required!'
          },
          notNull: {
            msg: 'Birthdate required!'
          },
          isDate: {
            msg: 'Invalid date format!'
          }
        }
      },
      job: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Job required!'
          },
          notNull: {
            msg: 'Job required!'
          }
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'tenant',
      },
      profileImgUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Image required!'
          },
          notNull: {
            msg: 'Image required!'
          }
        }
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
    await queryInterface.dropTable('Users');
  }
};