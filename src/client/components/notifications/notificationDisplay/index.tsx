import React from "react";
import { notificationItemType} from '../../../contexts/notification/index.tsx'
import { useNotification} from '../../../contexts/notification/index.tsx'
import Notification from '../notificationItem/index.tsx';
import './index.less'


export function NotificationDisplay({notifications,deleteNotification}:{notifications:notificationItemType[],deleteNotification:(notification:notificationItemType)=>void}){


    function closeNotificationHandle(notification:notificationItemType){
        deleteNotification(notification)
    }

    return(
        <div className="notification__container">
            {notifications.map((notificationObj)=> <Notification notification={notificationObj}  closeNotification={closeNotificationHandle} />)}
        </div>
        )
}