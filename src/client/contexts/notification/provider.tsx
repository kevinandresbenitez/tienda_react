import React, { ReactNode } from "react";
import {notificationContext} from './context.ts'
import  notificationHook from "./hooks/hookNotification.ts"
import { NotificationDisplay } from "../../components/notifications/notificationDisplay/index.tsx";


export const NotificationProvider = ({children}:{children:ReactNode}) => {

    const {notifications,addNotification,deleteNotification} = notificationHook();

    return (
        <notificationContext.Provider value={{notifications,addNotification,deleteNotification}}>
            {children}
            <NotificationDisplay notifications={notifications} deleteNotification={deleteNotification} />
        </notificationContext.Provider>
    );
};
