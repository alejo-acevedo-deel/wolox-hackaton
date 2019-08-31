module.exports = (sequelize, DataTypes) => {
  const Preset = sequelize.define(
    'presets',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      startHour: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startMinute: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      endHour: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      endMinute: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      modIn: {
        type: DataTypes.STRING,
        allowNull: false
      },
      modOut: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Ejecuta siempre a la hora de inicio
      actionStart: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Ejecuta siempre a la hora de fin
      actionEnd: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Ejecuta siempre si el level supera al seteado
      actionOn: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Ejecuta siempre si el level esta por debajo del seteado
      actionOff: {
        type: DataTypes.STRING,
        allowNull: false
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
