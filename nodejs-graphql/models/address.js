/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('address', {
		address_id: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		},
		address_detail: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address_gps_latitude: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		address_gps_longitude: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		app_address_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		channel_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		channel_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		city_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		county_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		county_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_by: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		is_deleted: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_modify_by: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_modify_time: {
			type: DataTypes.DATE,
			allowNull: true
		},
		province_code: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		province_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		zip_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'address',
		timestamps: false
	});
};
