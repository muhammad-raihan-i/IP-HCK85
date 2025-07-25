'use strict';
const bcrypt = require('../helpers/bcrypt');
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          arg: true,
          msg: 'Username unusable!'
        },
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
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          arg: true,
          msg: 'Email unusable!'
        },
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.DATE,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'tenant',
      },
      profileImgUrl: {
        type: DataTypes.TEXT
      }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hide(user.password);
      },
      beforeUpdate: (user, options) => {
        user.password = bcrypt.hide(user.password); 
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};