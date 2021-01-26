module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
       customer_id: {
        type: DataTypes.INTEGER
        ,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     amount: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     shippind_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
        }
      },
      order_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      order_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      order_date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      order_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
  });

  return orders;
};
