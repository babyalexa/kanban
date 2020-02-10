'use strict'
module.exports = (sequelize, DataTypes) => {
    class Board extends sequelize.Sequelize.Model {
        static associate(models) {}
    }

    Board.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `Title can't be blank`
                    }
                }
            },
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNull: {
                        args: false,
                        msg: `UserId can't be blank`
                    }
                }
            }
        },
        { sequelize }
    )

    return Board
}
