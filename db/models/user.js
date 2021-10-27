const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post }) {
      this.hasMany(Post);
    }
  }
  User.init({
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 6,
      },
    },
    city: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      default: 0,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
