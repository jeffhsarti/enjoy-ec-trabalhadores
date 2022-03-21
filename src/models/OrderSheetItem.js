module.exports = (sequelize, DataTypes) => {
  const OrderSheetItem = sequelize.define(
    "OrderSheetItem",
    {
      ordersheet_item_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ordersheet_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      count: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "ordersheet_item",
    }
  );

  OrderSheetItem.associate = (models) => {
    OrderSheetItem.belongsTo(models.OrderSheet, {foreignKey: 'ordersheet_id', as: 'ordersheet'});
    OrderSheetItem.hasOne(models.Product, {foreignKey: 'product_id', as: 'product'});
  };

  return OrderSheetItem;
};
