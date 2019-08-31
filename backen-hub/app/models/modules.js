module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    'modules',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uniqueKey: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      new: {
        type: DataTypes.BOOLEAN,
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
  return Module;
};
