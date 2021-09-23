const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entries extends Model {};

Entries.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      // make browser choose date, change to string
      type: DataTypes.STRING,
      allowNull: false
    },
    mask: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    sanitizer: DataTypes.BOOLEAN,
    vaccineCard: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT
  }, 
  {
    sequelize,
  }
);

module.exports = Entries;