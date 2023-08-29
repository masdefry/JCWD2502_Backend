'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({hotel_room}) {
      // define association here
      this.belongsTo(hotel_room, {foreignKey: 'hotel_rooms_id'})
    }
  }
  room_image.init({
    url: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'room_image',
  });
  return room_image;
};