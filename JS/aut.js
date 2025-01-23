function displayNotification() {

    const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'First log in or sign up to proceed.';
        document.body.appendChild(notification);


        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
        console.log("first")
       
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('#menu-toggle');
    const navCenter = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.menu-close');
    // Toggle navigation menu
    toggleButton.addEventListener('click', function() {
        navCenter.style.display = navCenter.style.display === 'none' ? 'flex' : 'none';
            navCenter.style.animation = 'slideIn 0.5s ease-in-out';
            toggleButton.style.display = 'none';
            closeBtn.style.display = 'block';
    });

    // Close navigation menu
    closeBtn.addEventListener('click', function() {
        navCenter.style.display = 'none';
        closeBtn.style.display = 'none';
        toggleButton.style.display = 'block';
        
    });
});
