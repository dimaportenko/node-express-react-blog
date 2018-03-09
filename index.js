require('dotenv').config();
const express = require('express');
const app = express();

require('./routes/postsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (request, response) => {
        response.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        );
    });
}

const PORT = process.env.PORT;
app.listen(PORT,'127.0.0.1');

