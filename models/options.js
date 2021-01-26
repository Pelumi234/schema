module.exports = (sequelize, DataTypes) => {
  const options = sequelize.define('options', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },
      option_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
  });

  return options;
};
