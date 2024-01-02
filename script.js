document.getElementById('generate').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var includeNumbers = document.getElementById('numbers').checked;
    var includeLetters = document.getElementById('letters').checked;
    var includeSpecial = document.getElementById('special').checked;

    var chars = '';
    if (includeNumbers) {
        chars += '0123456789';
    }
    if (includeLetters) {
        chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeSpecial) {
        chars += '!@#$%^&*()_-+=[]{}|;:,.<>?~`';

    }

    var password = '';
    for (var i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById('password').innerText = password;
});

document.getElementById('copy').addEventListener('click', function() {
    var password = document.getElementById('password').innerText;
    if (password) {
        navigator.clipboard.writeText(password);
    }
});
