'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Session, {foreignKey: 'RoomId',});
      Room.belongsTo(models.User,{foreignKey:'UserLandlordId'})
    }
  }
  Room.init({
    dormAddress: {
        type: DataTypes.TEXT,
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
        type: DataTypes.FLOAT,
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
        type: DataTypes.FLOAT,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};