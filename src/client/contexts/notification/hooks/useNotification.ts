import { useNotificationType } from "../types/useNotification.ts";
import { notificationContext } from "../context.ts";
import React from "react";

/**
 * Custom hook to interact with notifications.
 * 
 * Provides the following functionality:
 * - `addNotification`: Add a new notification to the list.
 * - `notifications`: Access the current list of notifications.
 * - `deleteNotification`: Delete a notification by its ID.
 * 
 * **Important:** This hook must be used within the context of a `NotificationProvider`.
 * If used outside of the `NotificationProvider`, an error will be thrown:
 * 
 * ```plaintext
 * Error: notification must be used within a NotificationProvider
 * ```
 * 
 * @returns {useNotificationType} An object containing `addNotification`, `notifications`, and `deleteNotification`.
 * 
 * @throws {Error} If used outside of a `NotificationProvider`, an error is thrown.
 */
export const useNotification = ():useNotificationType => { 
    const context = React.useContext(notificationContext);

    if (context === undefined) {
        throw new Error("notification must be used within a NotificationProvider");

    }

    return context;
    
}