import React from "react";
import { notificationType} from '../../types/notification/index.tsx'
import { useNotification} from '../../contexts/notification/index.tsx'
import Notification from './notification.tsx';
import './notificationDisplay.less'


export function NotificationDisplay({notifications}:{notifications:notificationType[]}){

    const {deleteNotification}  = useNotification();

    function closeNotificationHandle(notification:notificationType){
        deleteNotification(notification)
    }

    return(
        <div className="notification__container">
            {notifications.map((notificationObj)=> <Notification notification={notificationObj}  closeNotification={closeNotificationHandle} />)}
        </div>
        )
}