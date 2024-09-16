import React, { useEffect } from "react";
import { useState } from "react";
import { notificationType } from "../../../types/notification";



export default function NotificationHook(){
    const [notifications,setNotifications] = useState<notificationType[]>([]);


    function addNotification(notification:notificationType){
        setNotifications((prev)=>{ return [...prev,notification]})
    }

    function deleteNotification(notification:notificationType){
        setNotifications(prev => prev.filter(notificationObj => notification !== notificationObj));
    }

    return {notifications,addNotification,deleteNotification}

}