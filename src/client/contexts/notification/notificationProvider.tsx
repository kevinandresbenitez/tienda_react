import React from "react";
import {notificationContext} from './notificationContext.tsx'
import  notificationHook from "./hooks/notificationHook.tsx"
import { NotificationDisplay } from "../../components/notifications/notificationDisplay/index.tsx";


export const NotificationProvider = ({children}:{children:any}) => {

    const {notifications,addNotification,deleteNotification} = notificationHook();

    return (
        <notificationContext.Provider value={{notifications,addNotification,deleteNotification}}>
            {children}
            <NotificationDisplay notifications={notifications} deleteNotification={deleteNotification} />
        </notificationContext.Provider>
    );
};
