import React, { LegacyRef, useRef } from "react";
import { notificationType} from '../../types/notification/index.tsx'

import './notification.less'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck ,faCircleExclamation,faTrash} from "@fortawesome/free-solid-svg-icons";




export default function Notification({notification,closeNotification}:{notification:notificationType,closeNotification:(notification:notificationType)=> void}){

    const htmlNotification = useRef<HTMLDivElement>(null);

    setTimeout(()=>{
        if(htmlNotification.current){
            htmlNotification.current.classList.add('hiddeNotification');
            htmlNotification.current.addEventListener("animationend",()=>{ 
                closeNotification(notification)
            })
        }
        
    },notification.duration)

    return(
        <div className="notification" ref={htmlNotification}>

           <p>{notification.content}</p>
           {notification.variant == 'success' && <FontAwesomeIcon icon={faCheck} /> }
           {notification.variant == 'error' && <FontAwesomeIcon icon={faCircleExclamation} /> }
           {notification.variant == 'trash' && <FontAwesomeIcon icon={faTrash} /> }
           
        </div>

    )

}