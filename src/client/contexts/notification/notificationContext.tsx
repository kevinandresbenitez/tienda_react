import React from "react";

import {notificationContextType} from '../../types/notification/notificationContext.tsx'

export const  notificationContext = React.createContext<notificationContextType | undefined>(undefined);
