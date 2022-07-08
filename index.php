<?php 
    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Final Examination</title>
            <link rel="stylesheet" href="./styles/style.css">
            <script src="./script.js" defer></script>
        </head>
        <body>
            <div class="container">
                <div class="left">
                    <div class="line">
                        <h1>Final Exam</h1>
                    </div>
                    
                </div>
                <div class="right">
                    <h1>Employee Salary Evaluation</h1>
                    <div class="form-ctn">
                        <div class="btn-ctn">
                            <button class="switch full">Full time</button>
                            <button class="switch part">Part time</button>
                        </div>
                        <form class="form" action="index.php" method="post">

                        </form>
                    </div>
                </div>';        

            $fullname = $_POST['fullname'];
            $salary = $_POST['salary'];
            $hour = $_POST['hour'];
            $overtime = $_POST['overtime'];
            $rate = $_POST['rate'];
            $overtimePay = $overtime * ($rate * 1.25);
            $compute = ($rate * $hour) + $overtimePay;

            if(isset($_POST['fsubmit'])) {
                echo "<div class='modal'>
                        <div class='modalContent'>
                            <h1>Result</h1>
                            <label>
                                <p class='info'>Fullname:</p>
                                <p> $fullname </p>
                            </label>
                            <label>
                                <p class='info'>Salary:</p>
                                <p> $salary </p>
                            </label>
                            <button class='close'>CLOSE</button>
                        </div>
                </div>";
            }
            if(isset($_POST['psubmit'])) {
                echo "<div class='modal'>
                        <div class='modalContent'>
                            <h1>Result</h1>
                            <label>
                                <p class='info'>Fullname:</p>
                                <p> $fullname </p>
                            </label>
                            <label>
                            <p class='info'>Overtime pay:</p>
                            <p> $overtimePay </p>
                            </label>
                            <label>
                                <p class='info'>Salary:</p>
                                <p> $compute </p>
                            </label>
                            <button class='close'>CLOSE</button>
                        </div>
                </div>";
            }
        

    echo '</div>
        </body>
        </html>';
 ?>