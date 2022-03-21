module.exports = (sequelize, DataTypes) => {
  const OrderSheet = sequelize.define(
    "OrderSheet",
    {
      ordersheet_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "ordersheet",
    }
  );

  OrderSheet.associate = (models) => {
    OrderSheet.belongsTo(models.Chekin, {foreignKey: 'ordersheet_id', as: 'checkin'});
    OrderSheet.hasMany(models.OrderSheetItem, {foreignKey: 'ordersheet_id', as: 'ordersheetItems'});
    OrderSheet.hasOne(models.Sale, {foreignKey: 'ordersheet_id', as: 'sale'})
  };

  return OrderSheet;
};
