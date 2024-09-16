import { notificationType } from "./notificationType";


export interface useNotificationType{
    notifications: notificationType[],
    addNotification:(notification:notificationType)=> void,
    deleteNotification:(notification:notificationType)=> void
}
