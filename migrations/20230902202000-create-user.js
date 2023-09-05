'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      personality_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      interests: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instagram: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      facebook: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};