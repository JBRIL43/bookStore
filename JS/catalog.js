
document.querySelector('.logout-btn').addEventListener('click', function() {
    window.location.href = 'home.html'
})

document.addEventListener('DOMContentLoaded', function() {

        const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'You are Logged in Successfully .';
            document.body.appendChild(notification);
    
    
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 3000);
            console.log("logged in ")
    
})



