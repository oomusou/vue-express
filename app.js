let express = require('express');
let path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, 'dist')));

//Launch listening server on port 80
app.listen(80, () => console.log('app listening on port 80!'));
