const menuRouter=require('.\\menu')
const homeRouter=require('.\\home')
const branchRouter=require('.\\branch')
const albumRouter=require('.\\album')
const shopping_cartRouter=require('.\\shopping_cart')
function route(app){
  app.use('/menu',menuRouter);
  app.use('/branch',branchRouter);
  app.use('/album',albumRouter);
  app.use('/shopping_cart',shopping_cartRouter);
  app.use('/',homeRouter);
}
module.exports=route;