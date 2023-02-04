'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone_number: {
      type: DataTypes.BIGINT,
      allowNull:false
    },
    
    createdAt: {
      type: DataTypes.DataTypes,
      allowNull: false,
      defaultValue:DataTypes.NOW
    },

    deletedAt: {
      type: DataTypes.DataTypes,
    }

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};