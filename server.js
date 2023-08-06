const express = require('express');
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Fotax API Documentation",
            description:
                "Fotax Api Server complete solution",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "FotaxServer",
                url: "#",
                email: "hridoy4t@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true, customCssUrl:
            "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css"
    })
);

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});