import { useNotificationType } from "../../types/notification/useNotificationType";
import { notificationContext } from "./notificationContext.tsx";
import React from "react";


export const useNotification = ():useNotificationType => { 
    const context = React.useContext(notificationContext);

    if (context === undefined) {
        throw new Error("notification must be used within a NotificationProvider");

    }

    return {
        addNotification: context.addNotification,
        notifications: context.notifications,
        deleteNotification:context.deleteNotification

    };
    
}