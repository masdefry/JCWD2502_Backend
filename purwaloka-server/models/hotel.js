'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({hotel_room, hotel_image, location, facility}) {
      // define association here
      this.hasMany(hotel_room, {foreignKey: 'hotels_id'})
      this.hasMany(hotel_image, {foreignKey: 'hotels_id'})
      this.belongsTo(location, {foreignKey: 'locations_id'})
      this.belongsToMany(facility, {through: 'hotels_has_facilities', foreignKey: 'hotels_id'})
    }
  }
  hotel.init({
    name: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        notNull: {msg: 'Data Cannot be Empty!'}
      }
    },
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
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
    modelName: 'hotel',
  });
  return hotel;
};