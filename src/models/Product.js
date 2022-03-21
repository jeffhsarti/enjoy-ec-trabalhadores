module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "product",
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.ProductCategory, {foreignKey: 'category_id', as: 'productCategory'});
    Product.belongsToMany(models.OrderSheetItem, {foreignKey: 'product_id', as: 'ordersheetItem'});
  };

  return Product;
};
