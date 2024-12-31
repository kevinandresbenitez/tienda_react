import React from "react";

import {notificationContextType} from './types/context.ts'

export const  notificationContext = React.createContext<notificationContextType | undefined>(undefined);
