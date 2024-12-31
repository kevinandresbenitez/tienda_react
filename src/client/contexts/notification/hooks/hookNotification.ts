import React, { useEffect } from "react";
import { useState } from "react";
import { notificationItemType } from "../types/notificationItem";



export default function NotificationHook(){
    const [notifications,setNotifications] = useState<notificationItemType[]>([]);


    function addNotification(notification:notificationItemType){
        setNotifications((prev)=>{ return [...prev,notification]})
    }

    function deleteNotification(notification:notificationItemType){
        setNotifications(prev => prev.filter(notificationObj => notification !== notificationObj));
    }

    return {notifications,addNotification,deleteNotification}

}