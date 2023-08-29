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
     * 
    */
    await queryInterface.bulkInsert('hotels', 
    [
      {
        name: 'YELLO Hotel Harmoni',
        address: 'Jalan Hayam Wuruk No.6, RT.6/RW.2, Gambir, Kb. Klp., Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120, Indonesia',
        description:'YELLO Hotel Harmoni yang berjarak 10 menit berkendara ke Monumen Nasional yang bersejarah menawarkan tempat menginap yang stylish di Jakarta Pusat.', 
        telephone: '021 112233', 
        email: 'hotel@yello.co.id', 
        locations_id: 1
      },
      {
        name: 'Hotel Kuretakeso Kemang',
        address: 'Jalan Bangka Raya No.7 A, Pela Mampang, Mampang Prapatan, RT.2/RW.7, Pela Mampang, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720, Indonesia',
        description:'Hotel Kuretakeso Kemang yang berbintang 4 terletak di Kemang, salah satu area populer dan ramai di Jakarta.', 
        telephone: '021 112233', 
        email: 'kuretakesokemang@hotel.com', 
        locations_id: 1
      },
      {
        name: 'Namin Dago Hotel',
        address: 'Jl. Hasanudin No. 10, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat',
        description:'Berlokasi hanya 8 menit dengan berjalan kaki dari Taman Dago dan Institut Teknologi Bandung, Namin Dago Hotel menawarkan akomodasi modern dengan fasilitas tempat parkir gratis dan akses WiFi gratis di seluruh sudut properti.', 
        telephone: '021 112233', 
        email: 'dago@naminhotel.com', 
        locations_id: 2
      },
      {
        name: 'KIMAYA Braga Bandung, by HARRIS',
        address: 'Jl. Braga No.8, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
        description:'Berjarak 190 meter dari Museum Konferensi Asia-Afrika, KIMAYA Braga Bandung, by HARRIS menawarkan akomodasi bintang 4 di pusat kota Bandung.', 
        telephone: '021 112233', 
        email: 'hotel@kimayabraga.com', 
        locations_id: 2
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
