import React, { useEffect } from "react";
import { useState } from "react";
import { notificationItemType } from "../types/notificationItem";
import { useNotificationType } from "../types/useNotification";



export default function NotificationHook():useNotificationType{
    const [notifications,setNotifications] = useState<notificationItemType[]>([]);


    function addNotification(notification:notificationItemType){
        setNotifications((prev)=>{ return [...prev,notification]})
    }

    function deleteNotification(notification:notificationItemType){
        setNotifications(prev => prev.filter(notificationObj => notification !== notificationObj));
    }

    return {notifications,addNotification,deleteNotification}

}