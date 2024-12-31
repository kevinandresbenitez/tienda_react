import { notificationItemType } from "./notificationItem";


export interface useNotificationType{
    notifications: notificationItemType[],
    addNotification:(notification:notificationItemType)=> void,
    deleteNotification:(notification:notificationItemType)=> void
}
