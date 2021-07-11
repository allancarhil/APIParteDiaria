'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('us36', {
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
        allowNull: true,
      },
      hora_inicial: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hora_final: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      km_inicial: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      km_final: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      servicos: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      observacoes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      lanternagem: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      pneus: {
        type: Sequelize.TEXT,
        allowNull: true,
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
