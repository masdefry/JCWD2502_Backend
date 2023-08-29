'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('hotel_rooms', 
    [
      {
        name: 'Suite Double Yello', 
        price: 1213799, 
        total_guest: 2, 
        total_room: 50,
        hotels_id: 1, 
        room_bedtypes_id: 2
      }, 
      {
        name: 'Suite King Yello', 
        price: 1281799, 
        total_guest: 2, 
        total_room: 30,
        hotels_id: 1, 
        room_bedtypes_id: 3
      },
      {
        name: 'Kamar Deluks Twin', 
        price: 750780, 
        total_guest: 2, 
        total_room: 20,
        hotels_id: 2, 
        room_bedtypes_id: 1
      },
      {
        name: 'Kamar Deluks Double', 
        price: 791750, 
        total_guest: 2, 
        total_room: 20,
        hotels_id: 2, 
        room_bedtypes_id: 2
      },
      {
        name: 'Kamar Executive Double', 
        price: 900500, 
        total_guest: 3, 
        total_room: 20,
        hotels_id: 2, 
        room_bedtypes_id: 3
      },
      {
        name: 'Kamar Standard Double with Breakfast', 
        price: 690500, 
        total_guest: 2, 
        total_room: 15,
        hotels_id: 3, 
        room_bedtypes_id: 2
      },
      {
        name: 'Kamar Standard Twin with Breakfast', 
        price: 557080, 
        total_guest: 2, 
        total_room: 15,
        hotels_id: 3, 
        room_bedtypes_id: 1
      },
      {
        name: 'Kamar Standard Double/Twin Classic', 
        price: 650000, 
        total_guest: 2, 
        total_room: 25,
        hotels_id: 4, 
        room_bedtypes_id: 2
      },
      {
        name: 'Kamar Standard Double/Twin with City View', 
        price: 815000, 
        total_guest: 2, 
        total_room: 25,
        hotels_id: 4, 
        room_bedtypes_id: 2
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
