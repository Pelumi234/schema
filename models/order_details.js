module.exports = (sequelize, DataTypes) => {
  const order_details = sequelize.define('order_details', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      order_id: {
        type: DataTypes.INTEGER
        ,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
        }
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
  });

  return order_details;
};
