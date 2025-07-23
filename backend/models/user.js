'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Room, { foreignKey: 'UserLandlordId' });
      User.hasMany(models.Session, { foreignKey: 'UserTenantId' });
    }
  }
  User.init({
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
      }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};