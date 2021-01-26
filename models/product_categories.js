module.exports = (sequelize, DataTypes) => {
  const product_categories = sequelize.define('product_categories', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     
  });

  return product_categories;
};
