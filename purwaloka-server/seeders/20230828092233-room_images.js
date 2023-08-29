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
    await queryInterface.bulkInsert('room_images', 
    [
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/558b1d53-0ffa-4300-8fbb-c2f94ffed1f8-1615534293499-3006f349485dffebbeaba51c242d1de3.jpg', 
        hotel_rooms_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/02/19/8097c8cf-0756-45e6-97fd-f5083d4b38c4-1676808191126-d1df77288cd8787a41eeb9dfd1aa7abe.jpg', 
        hotel_rooms_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/d3dc9151-b55a-46cc-9a9c-3db945368d81-1603905753404-42e13a536adf65b4682690a37ab711d3.jpg', 
        hotel_rooms_id: 1
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/558b1d53-0ffa-4300-8fbb-c2f94ffed1f8-1615534293499-3006f349485dffebbeaba51c242d1de3.jpg', 
        hotel_rooms_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/02/19/8097c8cf-0756-45e6-97fd-f5083d4b38c4-1676808191126-d1df77288cd8787a41eeb9dfd1aa7abe.jpg', 
        hotel_rooms_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/29/d3dc9151-b55a-46cc-9a9c-3db945368d81-1603905753404-42e13a536adf65b4682690a37ab711d3.jpg', 
        hotel_rooms_id: 2
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/c8d80e0f-7d57-4820-8d0f-848e0439ea47-1615539949491-d1320b1b93a79a187b108ee48c0faeee.jpg', 
        hotel_rooms_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/3272818b-5aa9-4ec9-8f4b-6c1cf3b83543-1604121126011-22740a5b6cc297c86761be321ab65dca.jpg', 
        hotel_rooms_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/05/28/fb96fd17-c775-41f9-a6a0-6fcfdf75deaa-1622174972057-206746fe4c59dfbcc05883ecd1e85ee6.jpg', 
        hotel_rooms_id: 3
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/c8d80e0f-7d57-4820-8d0f-848e0439ea47-1615539949491-d1320b1b93a79a187b108ee48c0faeee.jpg', 
        hotel_rooms_id: 4
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/3272818b-5aa9-4ec9-8f4b-6c1cf3b83543-1604121126011-22740a5b6cc297c86761be321ab65dca.jpg', 
        hotel_rooms_id: 4
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/05/28/fb96fd17-c775-41f9-a6a0-6fcfdf75deaa-1622174972057-206746fe4c59dfbcc05883ecd1e85ee6.jpg', 
        hotel_rooms_id: 4
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/c8d80e0f-7d57-4820-8d0f-848e0439ea47-1615539949491-d1320b1b93a79a187b108ee48c0faeee.jpg', 
        hotel_rooms_id: 5
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/3272818b-5aa9-4ec9-8f4b-6c1cf3b83543-1604121126011-22740a5b6cc297c86761be321ab65dca.jpg', 
        hotel_rooms_id: 5
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/05/28/fb96fd17-c775-41f9-a6a0-6fcfdf75deaa-1622174972057-206746fe4c59dfbcc05883ecd1e85ee6.jpg', 
        hotel_rooms_id: 5
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/1339e88d-eec7-489b-b5a1-8ca13a27dad3-1678331223096-c8172bae172472245e02c71ee0af8f39.jpg', 
        hotel_rooms_id: 6
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/28/aaa458e7-8747-45df-9ccc-40c7fdb0cf0b-1603899108582-71cf1f936137f1ae96cae97fa84592a8.jpg', 
        hotel_rooms_id: 6
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/e6d664ff-93f4-45eb-ae74-8de83aa48495-1678331223218-abd3cca0575824d03c399acfab6a7d9e.jpg', 
        hotel_rooms_id: 6
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/d38d3fdd-3be3-4202-8fd5-c24d34d24ebd-1678331245334-aeddd99a2be2e7c5ae6fd1a3dcd9e0b1.jpg', 
        hotel_rooms_id: 7
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/09/31f99a21-c52e-4d00-9ef7-e1f68dcecd34-1678331244747-ddc6835f405333e805d5a3b7431aa1f0.jpg', 
        hotel_rooms_id: 7
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/28/731d654f-d6f5-4c04-95f0-52538c92b7ca-1603899392737-ac7920ed2ed5c0d98d1819fbf5874bd0.jpg', 
        hotel_rooms_id: 7
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/b218e609-1ae6-4a82-bbc5-bfcb3db11b8b-1637319929137-2db8c85e2df20b39814e75c0f80df697.jpg', 
        hotel_rooms_id: 8
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/1ea7b04d-9ca7-4e27-9334-a5b5ded9a3ce-1637319929150-7bd8385d0a831e7d855087f45cbf05a8.jpg', 
        hotel_rooms_id: 8
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/b218e609-1ae6-4a82-bbc5-bfcb3db11b8b-1637319929137-2db8c85e2df20b39814e75c0f80df697.jpg', 
        hotel_rooms_id: 9
      },
      {
        url: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/11/19/1ea7b04d-9ca7-4e27-9334-a5b5ded9a3ce-1637319929150-7bd8385d0a831e7d855087f45cbf05a8.jpg', 
        hotel_rooms_id: 9
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
