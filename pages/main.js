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
                        margin-top: 50px;
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
                    #countdown {
                        font-size: 70px;
                        color: white;
                        margin-top: 90px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="/logos/aws.png" alt="AWS Logo">
                    <h1 style="color: white; font-weight: bold;">AWS EKS DEMO KALAN SURE</h1>
                    <div id="countdown">90:00</div>
                </div>
                <script>
                    function startCountdown(duration, display) {
                        var timer = duration, minutes, seconds;
                        setInterval(function () {
                            minutes = parseInt(timer / 60, 10);
                            seconds = parseInt(timer % 60, 10);

                            minutes = minutes < 10 ? "0" + minutes : minutes;
                            seconds = seconds < 10 ? "0" + seconds : seconds;

                            display.textContent = minutes + ":" + seconds;

                            if (--timer < 0) {
                                timer = 0;
                            }
                        }, 1000);
                    }

                    window.onload = function () {
                        var countdownDuration = 90 * 60; // 90 minutes in seconds
                        var display = document.getElementById('countdown');
                        startCountdown(countdownDuration, display);
                    };
                </script>
            </body>
        </html>
    `);
});

module.exports = router;
