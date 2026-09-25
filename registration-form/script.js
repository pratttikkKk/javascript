document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        password: document.getElementById('passwordError'),
        confirmPassword: document.getElementById('confirmPasswordError')
    };
    
    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    
    // Form submit
    form.addEventListener('submit', handleSubmit);
    
    function validateName() {
        const value = nameInput.value.trim();
        clearError(errors.name);
        
        if (value.length < 2) {
            showError(errors.name, 'Name must be at least 2 characters');
        }
    }
    
    function validateEmail() {
        const value = emailInput.value.trim();
        clearError(errors.email);
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(errors.email, 'Please enter a valid email address');
        }
    }
    
    function validatePassword() {
        const value = passwordInput.value;
        clearError(errors.password);
        
        if (value.length < 6) {
            showError(errors.password, 'Password must be at least 6 characters');
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            showError(errors.password, 'Password must contain uppercase, lowercase and number');
        }
    }
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirm = confirmPasswordInput.value;
        clearError(errors.confirmPassword);
        
        if (confirm && confirm !== password) {
            showError(errors.confirmPassword, 'Passwords do not match');
        }
    }
    
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        // Run all validations
        validateName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        
        // Check if any errors
        const hasErrors = Object.values(errors).some(error => error.classList.contains('show'));
        
        if (!hasErrors) {
            // Simulate success
            alert('Registration successful! Welcome aboard 🎉');
            form.reset();
        }
    }
});
