module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
     password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
        }
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      billing_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      default_shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
  });

  return customers;
};
