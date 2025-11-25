'use strict';


// count number of unread notifications
const unReadNotification = document.querySelectorAll(".unread");

const notificationNum = document.querySelector('#notificationNumber');
notificationNum.textContent = unReadNotification.length;

// grab the unread notifications
// const unReadNotification = document.querySelector(".unread");

unReadNotification.onclick = () => {
    unReadNotification.classList.remove('unread');
    notificationNum.textContent(notificationNum--);
}


// mark all as read
const markAllAsRead = document.querySelector('#markAll');
    markAllAsRead.onclick = () => {
     unReadNotification.forEach(notification => {
        notification.classList.remove('unread');
        // notificationNum.textContent(0);
    });
}