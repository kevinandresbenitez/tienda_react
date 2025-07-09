import React, { ReactNode } from "react";
import {notificationContext} from './context.ts'
import  notificationHook from "./hooks/useNotificationHook.ts"
import { NotificationDisplay } from "../../components/notifications/notificationDisplay/index.tsx";


/**
 * `NotificationProvider` Component
 * 
 * The `NotificationProvider` component provides the context and functions needed to manage notifications
 * in your application. It enables the use of the `useNotification` hook for creating, displaying, and removing
 * notifications. Additionally, it includes a built-in `NotificationDisplay` component that automatically 
 * renders the notifications.
 * 
 * This component should be used to wrap your application or any component tree that requires access 
 * to notifications.
 * 
 * @example
 * ```tsx
 * <NotificationProvider>
 *   <YourComponent />
 *   <NotificationDisplay />
 * </NotificationProvider>
 * ```
 */
export const NotificationProvider = ({children}:{children:ReactNode}) => {

    const {notifications,addNotification,deleteNotification} = notificationHook();

    return (
        <notificationContext.Provider value={{notifications,addNotification,deleteNotification}}>
            {children}
            <NotificationDisplay notifications={notifications} deleteNotification={deleteNotification} />
        </notificationContext.Provider>
    );
};
