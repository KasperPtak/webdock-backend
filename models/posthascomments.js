"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostHasComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostHasComments.belongsTo(models.Post, {
        foreignKey: 'post_id'
      })
      PostHasComments.belongsTo(models.Comment, {
        foreignKey: 'comment_id'
      })

    }
  }
  PostHasComments.init(
    {
      post_id: DataTypes.INTEGER,
      comment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PostHasComments",
    }
  );
  return PostHasComments;
};
