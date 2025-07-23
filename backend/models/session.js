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
      Session.belongsTo(models.Room, {
        foreignKey: 'RoomId',
        as: 'room'
      });
      Session.belongsTo(models.User, {
        foreignKey: 'UserTenantId',
        as: 'tenant'
      });
    }
  }
  Session.init({
    startDate: DataTypes.DATE,
    isRunning: DataTypes.BOOLEAN,
    endDate: DataTypes.DATE,
    RoomId: DataTypes.INTEGER,
    UserTenantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};