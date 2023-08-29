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
    await queryInterface.bulkInsert('hotel_images', 
    [
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/74e13b6d-a604-49a4-aa8f-728f1e9d81c0-1603905754441-62ba97d3e7c2f1e61ae3700a92359fc1.jpg', 
        hotels_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/7b0b6440-2e4e-45b3-9410-eb65b63e9ac5-1604139640160-c657b9f3cb163cef116b889dce28d70d.jpg', 
        hotels_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/8033719b-c94e-43d6-a6a1-a90c61053f9c-1603905755547-bc2979a77a16a969f14a4f9d6d2cec66.jpg', 
        hotels_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/dc276cf5-4ee2-4601-a519-1ce90af53439-1604133610736-f888f6ab55bd101ff17cbf0e99a18821.jpg', 
        hotels_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/f5b8917b-4472-4f1a-aed7-aa59758f72a0-1604121123768-cf68b8062923b5899c31fbe8f91ceabd.jpg', 
        hotels_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/34594a08-0dcd-4a77-a4e4-a35a80f14f10-1604133611069-490d48e1ce29a39a6594c9133dc78d24.jpg', 
        hotels_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/28/33e60f12-bcc1-4936-a775-bbb5f0563fb2-1603899108583-e56f027cfb5d9530cbea1be8941731ce.jpg', 
        hotels_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/3a5ac893-21e0-473d-91e0-5e54df71572e-1678331246434-db26e25ffc1527d76e14d1a9227b65b6.jpg', 
        hotels_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/1a08655a-ae3a-42d5-97d3-4eb4b45f145b-1678331246571-5967019deb6c07bd437c1197eea4ba75.jpg', 
        hotels_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/11/035137d7-643a-49b9-9666-089308a3cef7-1636619126969-60bbadaee068bc139b2c51ee03f3f94d.jpg', 
        hotels_id: 4
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/4cf8e034-6651-4160-ba79-36f37591ce6c-1637319684810-3676f789d85e346439cec85c8b84668e.jpg', 
        hotels_id: 4
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/ca685bd3-4133-49cb-9ad5-aaf0e0b22f45-1637319685280-0e177952bf99f68f932cec845cbd5289.jpg', 
        hotels_id: 4
      }
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
