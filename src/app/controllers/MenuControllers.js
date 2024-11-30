const MenuModel = require('..\\models\\MenuModel'); // Import model

class MenuControlle{
    index(req,res){
        MenuModel.getAllProducts((err, products_outstanding) => {
            if (err) {
                console.error('Lỗi khi lấy dữ liệu:', err);
                return res.status(500).send('Lỗi server');
            }
            console.log('Dữ liệu gửi tới view:', products_outstanding); // Log dữ liệu
            res.render('Menu', { products_outstanding });
        });
        MenuModel.getAllBranch((err, branch) => {
            if (err) {
                console.error('Lỗi khi lấy dữ liệu:', err);
                return res.status(500).send('Lỗi server');
            }
            console.log('Dữ liệu gửi tới view:', products_outstanding); // Log dữ liệu
            res.render('Menu', {branch });
        });
        MenuModel.getAllTypeOfDish((err, TypeOfDish) => {
            if (err) {
                console.error('Lỗi khi lấy dữ liệu:', err);
                return res.status(500).send('Lỗi server');
            }
            console.log('Dữ liệu gửi tới view:', products_outstanding); // Log dữ liệu
            res.render('Menu', {TypeOfDish });
        });
    }
}


module.exports=new MenuControlle;