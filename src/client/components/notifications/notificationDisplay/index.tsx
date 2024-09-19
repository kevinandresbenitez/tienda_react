import React from "react";
import { notificationType} from '../../../types/notification/index.tsx'
import { useNotification} from '../../../contexts/notification/index.tsx'
import Notification from '../notificationItem/index.tsx';
import './index.less'


export function NotificationDisplay({notifications,deleteNotification}:{notifications:notificationType[],deleteNotification:(notification:notificationType)=>void}){


    function closeNotificationHandle(notification:notificationType){
        deleteNotification(notification)
    }

    return(
        <div className="notification__container">
            {notifications.map((notificationObj)=> <Notification notification={notificationObj}  closeNotification={closeNotificationHandle} />)}
        </div>
        )
}