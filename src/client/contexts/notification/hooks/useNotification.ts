import { useNotificationType } from "../types/useNotification.ts";
import { notificationContext } from "../context.ts";
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