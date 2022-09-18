module.exports = (sequelize, DataTypes) => {
    const bygoneplans = sequelize.define("bygoneplans", {
        plan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iniDate: {
            type: DataTypes.DATEONLY,
        },
        advisor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        budgett: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        expenses: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        profit: {
            type: DataTypes.DOUBLE,
        },
    });

    return bygoneplans;
};
