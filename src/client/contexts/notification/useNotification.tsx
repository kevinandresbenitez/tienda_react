import { useNotificationType } from "../../types/notification/useNotificationType";
import { notificationContext } from "./notificationContext.tsx";
import React from "react";


/**
 * `useNotification` is a custom React hook that provides access to the notification context.
 * It allows components to interact with the notification system by providing functions to
 * add and delete notifications, as well as access the current list of notifications.
 * 
 * This hook must be used within a `NotificationProvider` component. If it is used outside of
 * a `NotificationProvider`, it will throw an error.
 * 
 * @hook
 * @example
 * 
 * @returns {useNotificationType} An object containing the following properties:
 * - `addNotification` (function): Function to add a new notification.
 * - `notifications` (Array): The current list of notifications.
 * - `deleteNotification` (function): Function to delete a notification.
 * 
 * @throws {Error} If used outside of a `NotificationProvider`, an error will be thrown.
 */
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