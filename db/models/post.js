const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'UserId' });
    }
  }
  Post.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    picturePath: {
      type: DataTypes.TEXT,
    },
    cost: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    damage: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
