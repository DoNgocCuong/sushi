const db = require('../../config/db'); // Import kết nối MySQL
class MenuModel{
    static getAllProducts(callback) {
        const query = 'SELECT * FROM MONAN'; // Lấy dữ liệu từ bảng
        db.query(query, (err, results) => {
            if (err) {
                console.error('Lỗi khi thực hiện truy vấn:', err);
                return callback(err, null);
            }
            console.log('Kết quả từ database:', results); // Log kết quả từ database
            callback(null, results);
        });
    }
    static getAllBranch(callback) {
        const query = 'SELECT * FROM CHINHANH'; // Lấy dữ liệu từ bảng
        db.query(query, (err, results) => {
            if (err) {
                console.error('Lỗi khi thực hiện truy vấn:', err);
                return callback(err, null);
            }
            console.log('Kết quả từ database:', results); // Log kết quả từ database
            callback(null, results);
        });
    }
    static getAllTypeOfDish(callback) {
        const query = 'SELECT * FROM LOAIMON'; // Lấy dữ liệu từ bảng
        db.query(query, (err, results) => {
            if (err) {
                console.error('Lỗi khi thực hiện truy vấn:', err);
                return callback(err, null);
            }
            console.log('Kết quả từ database:', results); // Log kết quả từ database
            callback(null, results);
        });
    }

}
module.exports = MenuModel;