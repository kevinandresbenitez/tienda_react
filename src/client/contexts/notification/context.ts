import React from "react";
import { useNotificationType } from "./types/useNotification";


export const  notificationContext = React.createContext<useNotificationType | undefined>(undefined);
