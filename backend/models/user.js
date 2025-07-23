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
      User.hasMany(models.Room, {
        foreignKey: 'UserLandlordId',
        as: 'rooms'
      });
      User.hasMany(models.Session, {
        foreignKey: 'UserTenantId',
        as: 'sessions'
      });
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    job: DataTypes.STRING,
    role: DataTypes.STRING,
    profileImgUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};