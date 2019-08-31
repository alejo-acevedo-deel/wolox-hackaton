module.exports = (sequelize, DataTypes) => {
  const Preset = sequelize.define(
    'presets',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startHour: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'start_hour'
      },
      startMinute: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'start_minute'
      },
      endHour: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'end_hour'
      },
      endMinute: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'end_minute'
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      modIn: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'mod_in'
      },
      modOut: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'mod_out'
      },
      // Ejecuta siempre a la hora de inicio
      actionStart: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'action_end'
      },
      // Ejecuta siempre a la hora de fin
      actionEnd: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'action_start'
      },
      // Ejecuta siempre si el level supera al seteado
      actionOn: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'action_on'
      },
      // Ejecuta siempre si el level esta por debajo del seteado
      actionOff: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'action_off'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {}
  );
  return Preset;
};
