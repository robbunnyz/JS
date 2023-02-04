'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Ihsan Rabbani',
      password: 'ihsanrabbani',
      email: 'ihsanrabbani@gmail.com',
      phone_number: 6281283490676,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hanifah Triari',
      password: 'hanifahtriari',
      email: 'hanifahtriari@gmail.com',
      phone_number: 6285697201853,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hafizh Taqiudin',
      password: 'hafizhtaqiudin',
      email: 'hafizhtaqiudin@gmail.com',
      phone_number: 6281688907238,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Afifah Sumayyah',
      password: 'afifahsumayyah',
      email: 'afifahsumayyah@gmail.com',
      phone_number: 6285609872134,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]) 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
