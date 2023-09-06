'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users,' [{
      user_first_name: 'Hayley',
      user_last_name: 'Dean',
      birthdate: '1996',
      personality_type: 'INTP',
      interests: 'movies, video games, books',
      instagram: '',
      facebook: '',
      email: 'hayleymdean271@gmail.com'
    }/*,
    {
      user_first_name: '',
      user_last_name: '',
      birthdate: '',
      personality_type: '',
      interests: '',
      instagram: '',
      facebook: '',
      email: ''
    },
    {
      user_first_name: '',
      user_last_name: '',
      birthdate: '',
      personality_type: '',
      interests: '',
      instagram: '',
      facebook: '',
      email: ''
    },
    {
      user_first_name: '',
      user_last_name: '',
      birthdate: '',
      personality_type: '',
      interests: '',
      instagram: '',
      facebook: '',
      email: ''
    }*/])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
