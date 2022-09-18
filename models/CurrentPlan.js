module.exports = (sequelize, DataTypes) => {
    const currentplans = sequelize.define("currentplans", {
        planname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        budget: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return currentplans;
};
