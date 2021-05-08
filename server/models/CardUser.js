const DataType = require('sequelize/lib/data-types')
module.exports = (sequelize) => {
    return sequelize.define("Cards", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },  
      cardNumber: {
        type: DataType.INTEGER
      },
      cardExpMonth: {
        type: DataType.STRING
      },
      cardExpYear: {
        type: DataType.STRING
      },
      cardCVC: {
        type: DataType.STRING
      },
      cardName: {
        type: DataType.STRING
      },
      country: {
        type: DataType.STRING
      },
      postal_code: {
        type: DataType.STRING
      },
    });
  };