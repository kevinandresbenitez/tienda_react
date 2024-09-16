import React from "react";
import {notificationContext} from './notificationContext.tsx'
import  notificationHook from "./hooks/notificationHook.tsx"
import { NotificationDisplay } from "../../components/notification/notificationDisplay.tsx";


/**
 * `NotificationProvider` is a React component that provides notification management and display capabilities
 * through a context. It encapsulates the logic for handling notifications, including adding and deleting
 * notifications, and provides these functionalities to its child components via context.
 * 
 * It uses the `notificationContext` to provide the current state of notifications, as well as functions to
 * add and delete notifications. The component also renders `NotificationDisplay`, which is responsible for
 * displaying the notifications on the user interface.
 * 
 * @component
 * @example
 * // Example usage
 * import React from 'react';
 * import { NotificationProvider } from './NotificationProvider';
 * 
 * function App() {
 *     return (
 *         <NotificationProvider>
 *             <YourComponent />
 *             <NotificationDisplay notifications={notifications} />
 *         </NotificationProvider>
 *     );
 * }
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will have access to the notification context.
 * 
 * @returns {JSX.Element} The `NotificationProvider` component.
 */
export const NotificationProvider = ({children}:{children:any}) => {

    const {notifications,addNotification,deleteNotification} = notificationHook();

    return (
        <notificationContext.Provider value={{notifications,addNotification,deleteNotification}}>
            {children}
            <NotificationDisplay notifications={notifications} />
        </notificationContext.Provider>
    );
};
