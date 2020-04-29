/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		salary: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
