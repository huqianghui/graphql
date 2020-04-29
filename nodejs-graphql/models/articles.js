/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('articles', {
		articleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(500),
			allowNull: true
		},
		category: {
			type: DataTypes.STRING(500),
			allowNull: true
		}
	}, {
		tableName: 'articles',
		timestamps: false
	});
};
