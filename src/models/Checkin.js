module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define(
    "Checkin",
    {
      checkin_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      checkin_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ordersheet_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "checkin",
    }
  );

  Checkin.associate = (models) => {
    Checkin.belongsTo(models.User, {foreignKey: 'client_id', as: 'user'});
    Checkin.hasOne(models.OrderSheet, {foreignKey: 'ordersheet_id', as: 'ordersheet'});
  };

  return Checkin;
};
