'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({hotel, hotel_room}) {
      // define association here
      this.belongsToMany(hotel, {through: 'hotels_has_facilities', foreignKey: 'facilities_id'})
      this.belongsToMany(hotel_room, {through: 'hotel_rooms_has_facilities', foreignKey: 'hotel_rooms_id'})
    }
  }
  facility.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'facility',
  });
  return facility;
};