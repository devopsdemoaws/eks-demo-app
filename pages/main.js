const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>AWS EKS DEMO</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #0073a8;
                    }
                    .container {
                        text-align: center;
                    }
                    h1 {
                        margin-top: 50;
                    }
                    button {
                        margin: 10px;
                        padding: 10px 20px;
                        font-size: 16px;
                    }
                    img {
                        width: 150px;
                        height: auto;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="/logos/aws.png" alt="AWS Logo">
                    <h1 style="color: white; font-weight: bold;">AWS EKS DEMO</h1>
                </div>
            </body>
        </html>
    `);
});

module.exports = router;
