'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('us37', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      motorista: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      data: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      hora_inicial: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      hora_final: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      km_inicial: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      km_final: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      servicos: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      observacoes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      lanternagem: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      pneus: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
