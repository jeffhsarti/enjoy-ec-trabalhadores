module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      category_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "product_category",
    }
  );

  ProductCategory.associate = (models) => {
    ProductCategory.hasMany(models.Product, {foreignKey: 'product_id', as: 'product'});
  };

  return ProductCategory;
};
