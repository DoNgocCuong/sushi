// const MenuModel = require('..\\models\\MenuModel'); // Import model

// class MenuControlle{
//     index(req,res){
//         MenuModel.getAllProducts((err, products_outstanding) => {
//             if (err) {
//                 console.error('Lỗi khi lấy dữ liệu:', err);
//                 return res.status(500).send('Lỗi server');
//             }
//             console.log('Dữ liệu gửi tới view:', products_outstanding); // Log dữ liệu
//             res.render('Menu', { products_outstanding });
//         });
//         MenuModel.getAllBranch((err, branch) => {
//             if (err) {
//                 console.error('Lỗi khi lấy dữ liệu:', err);
//                 return res.status(500).send('Lỗi server');
//             }
//             res.render('Menu', {branch });
//         });
//         MenuModel.getAllTypeOfDish((err, TypeOfDish) => {
//             if (err) {
//                 console.error('Lỗi khi lấy dữ liệu:', err);
//                 return res.status(500).send('Lỗi server');
//             }
//             res.render('Menu', {TypeOfDish });
//         });
//     }
// }


// module.exports=new MenuControlle;
const MenuModel = require('..\\models\\MenuModel'); // Import model

class MenuController {
    index(req, res) {
        // Tạo các Promise cho từng truy vấn
        const productsPromise = new Promise((resolve, reject) => {
            MenuModel.getAllProducts((err, products_outstanding) => {
                if (err) {
                    reject('Lỗi khi lấy sản phẩm: ' + err);
                } else {
                    resolve(products_outstanding);
                }
            });
        });

        const branchPromise = new Promise((resolve, reject) => {
            MenuModel.getAllBranch((err, branch) => {
                if (err) {
                    reject('Lỗi khi lấy chi nhánh: ' + err);
                } else {
                    resolve(branch);
                }
            });
        });

        const typeOfDishPromise = new Promise((resolve, reject) => {
            MenuModel.getAllTypeOfDish((err, TypeOfDish) => {
                if (err) {
                    reject('Lỗi khi lấy loại món ăn: ' + err);
                } else {
                    resolve(TypeOfDish);
                }
            });
        });

        // Sử dụng Promise.all để chờ tất cả các truy vấn hoàn thành
        Promise.all([productsPromise, branchPromise, typeOfDishPromise])
            .then(([products_outstanding, branch, TypeOfDish]) => {
                // Sau khi tất cả dữ liệu đã được lấy, render view với tất cả dữ liệu
                res.render('Menu', { 
                    products_outstanding, 
                    branch, 
                    TypeOfDish 
                });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send('Lỗi server');
            });
    }
}

module.exports = new MenuController();
