module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
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
      mobile_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      establishment_date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      team_members: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      performance: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
    });

  return department;
};
