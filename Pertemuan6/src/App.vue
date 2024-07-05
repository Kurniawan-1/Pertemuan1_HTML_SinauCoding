<template>
      <div class="container">
        <div class="left-content">
            <h1>Welcome to Twitter</h1>
            <h2>Happening now, join twitter today</h2>
            <img src="./assets/Ilustrator.svg" alt="ilustrator.svg">
            <p>&copy; 2022 Twitter, Inc</p>
        </div>
        <div class="right-content">
            <div class="form-login">
                <div class="twitter-logo">
                    <img src="./assets/Logo Twitter.svg" alt="logo Twitter.svg">
                    <p>Don't have an account ? <a href="#" target="_blank">Sign Up</a></p>
                </div>
                <h1>Login to Twitter</h1>
                <p class="subtitle">Enter Twitter Account</p>
                <input type="text" name="username" id="username" placeholder="Phone, email or username"
                    autocomplete="on">
                <input type="password" name="password" id="password" placeholder="Password">
                <a href="#" target="_blank" class="forgot-password">Forgot password ?</a>
                <button type="submit">Sign In</button>
                <p class="or">or</p>
                <div class="button-container">
                    <a href="#" target="_blank" class="google">
                        <img src="./assets/Logo Google.svg" alt="google.svg">
                        Sign in with Google
                    </a>
                    <a href="#" target="_blank" class="apple">
                        <img src="./assets/Logo Apple.svg" alt="apple.svg">
                        Sign in with Apple
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>