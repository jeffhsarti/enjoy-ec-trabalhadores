module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      sales_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      ordersheet_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sale_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "sale",
    }
  );

  Sale.associate = (models) => {    
    Sale.belongsTo(models.OrderSheet, {foreignKey: 'ordersheet_id', as: 'ordersheet'})
  };

  return Sales;
};
