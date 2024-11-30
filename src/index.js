const express = require('express')
const port = 3000
const morgan = require('morgan')
const handlebars=require('express-handlebars');
const path=require('path')
const app = express();


const route=require('.\\routes')

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))
// Middleware
app.use(express.json());

app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');


app.set('views', 'src\\resources\\views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})