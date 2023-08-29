'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
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
  reservation.init({
    ammount: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
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
    modelName: 'reservation',
  });
  return reservation;
};