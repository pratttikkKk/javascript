const express = require('express');

const app = express();

const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')

app.use('/admin',adminRoutes);
app.use('/admin',shopRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});