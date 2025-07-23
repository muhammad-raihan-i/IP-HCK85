'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.User, {
        foreignKey: 'UserLandlordId',
        as: 'landlord'
      });
      Room.hasMany(models.Session, {
        foreignKey: 'RoomId',
        as: 'sessions'
      });
    }
  }
  Room.init({
    dormAddress: DataTypes.STRING,
    dormLat: DataTypes.FLOAT,
    dormLong: DataTypes.FLOAT,
    roomNumber: DataTypes.STRING,
    roomImageUrl: DataTypes.STRING,
    roomSize: DataTypes.INTEGER,
    UserLandlordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};