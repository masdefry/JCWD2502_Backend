'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({hotel, room_bedtype, room_image, reservation, facility}) {
      // define association here
      this.belongsTo(hotel, {foreignKey: 'hotels_id'})
      this.belongsTo(room_bedtype, {foreignKey: 'room_bedtypes_id'})
      this.hasMany(room_image, {foreignKey: 'hotel_rooms_id'})
      this.hasMany(reservation, {foreignKey: 'hotel_rooms_id'})
      this.belongsToMany(facility, {through: 'hotel_rooms_has_facilities', foreignKey: 'hotel_rooms_id'})
    }
  }
  hotel_room.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    total_guest: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
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
    modelName: 'hotel_room',
  });
  return hotel_room;
};