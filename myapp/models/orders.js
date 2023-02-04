'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },

    item: {
      type: DataTypes.STRING,
      allowNull:false
    },

    price: {
      type: DataTypes.BIGINT,
      allowNull:false
    },

    notes: {
      type: DataTypes.STRING,
    }

  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};