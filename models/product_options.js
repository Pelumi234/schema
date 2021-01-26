module.exports = (sequelize, DataTypes) => {
  const product_options = sequelize.define('product_options', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     products_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     
  });

  return product_options;
};
