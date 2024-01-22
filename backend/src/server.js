const express = require('express');
const cors = require('cors');
const ApiRoutes = require('./routes/index');
const { PORT } = require('./config/serverConfig');
const { connect } = require('./config/connect');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRoutes);

app.listen(PORT, async () => {
    await connect();
    console.log(`Server listening on port ${PORT}`);
}
);
