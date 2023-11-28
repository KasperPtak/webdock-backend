'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   User.belongsTo(models.Role, {
    //     foreignKey: 'roleId'
    //   })
    //   // define association here
    // User.belongsToMany(models.Post, {
    //   through: 'PostHasUpvote',
    //   foreignKey: 'user_id'
    // });  
  }
    
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    last_login: DataTypes.DATE,
    profile_picture: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};