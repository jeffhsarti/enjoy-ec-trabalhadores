module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      client_id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      birth_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "clients",
    }
  );

  Client.associate = (models) => {
    Client.hasMany(models.Checkin, {foreignKey: 'client_id', as: 'checkin'});
  };

  return Client;
};
