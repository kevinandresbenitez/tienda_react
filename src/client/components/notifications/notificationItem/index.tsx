import React, { LegacyRef, useRef, useEffect } from "react";
import { notificationItemType} from '../../../contexts/notification/index.ts'

import './index.less'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck ,faCircleExclamation,faTrash} from "@fortawesome/free-solid-svg-icons";


export default function Notification({notification,closeNotification}:{notification:notificationItemType,closeNotification:(notification:notificationItemType)=> void}){

    const htmlNotification = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const el = htmlNotification.current;
        if (!el) return;

        const onAnimationEnd = () => closeNotification(notification);

        const t = setTimeout(()=>{
            if(el){
                el.classList.add('hiddeNotification');
                el.addEventListener('animationend', onAnimationEnd);
            }
        }, notification.duration);

        return ()=>{
            clearTimeout(t);
            if(el){
                el.removeEventListener('animationend', onAnimationEnd);
            }
        }
    }, [notification.duration]);

    return(
        <div className="notification" ref={htmlNotification}>

           <p>{notification.content}</p>
           {notification.variant == 'success' && <FontAwesomeIcon icon={faCheck} /> }
           {notification.variant == 'error' && <FontAwesomeIcon icon={faCircleExclamation} /> }
           {notification.variant == 'trash' && <FontAwesomeIcon icon={faTrash} /> }
           
        </div>

    )

}