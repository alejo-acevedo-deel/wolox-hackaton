'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('presets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      startHour: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      startMinute: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endHour: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endMinute: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      modIn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modOut: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Ejecuta siempre a la hora de inicio
      actionStart: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Ejecuta siempre a la hora de fin
      actionEnd: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Ejecuta siempre si el level supera al seteado
      actionOn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // Ejecuta siempre si el level esta por debajo del seteado
      actionOff: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('presets')
};
