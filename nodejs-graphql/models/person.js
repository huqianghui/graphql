/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('person', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		city: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		flat_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		house_no: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		postal_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		street: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		birth_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		first_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'person',
		timestamps: false
	});
};
