<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style-forms.css">
    <link rel="icon" href="../../img/logo-wings.ico" type="image/x-icon">
</head>
<body>
    <?php include 'common/header.php'; ?>
    <main>
        <section class="form-container">
            <div class="form-box" id="login-form">
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="#" onclick="showForm('register')">Register here</a>.</p>
            </div>

            <div class="form-box" id="register-form">
                <h2>Register</h2>
                <form>
                    <input type="text" name="username" placeholder="Username" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="#" onclick="showForm('login')">Login here</a>.</p>
            </div>
        </section>
    </main>
    <?php include 'common/footer.php'; ?>
    <script src="../js/forms.js"></script>
</body>
</html>
