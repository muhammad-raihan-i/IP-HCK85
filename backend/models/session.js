'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.belongsTo(models.Room, { foreignKey: 'RoomId' });
      Session.belongsTo(models.User, { foreignKey: 'UserTenantId' });
    }
  }
  Session.init({
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Start date required!'
          },
          notNull: {
            msg: 'Start date required!'
          }
        }
      },
      isRunning: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'End date required!'
          },
          notNull: {
            msg: 'End date required!'
          }
        }
      },
      RoomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      UserTenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};