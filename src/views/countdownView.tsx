import React, { FunctionComponent } from "react";
import { BlockAttributes } from "widget-sdk";

import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { CountdownCard } from "../components/CountdownCard";
import { ExpiredCard } from "../components/ExpiredCard";

/**
 * React Component
 */
 export interface CustomWidgetCountdownProps extends BlockAttributes {
    title: string;
    showtitle: boolean;
    titlecolor: string;
    countdowndate: string;
    expiredmessage: string;
    boxescolorbg: string;
    boxescolortext: string;
    boxescolorborder: string;
}

const calculatedifference=(start: number, enddate: string)=>{
  const end = new Date(enddate).getTime();
  
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const distance = end - start;
  const days= Math.floor(distance / (day));
  const hours = Math.floor((distance % (day)) / (hour));
  const minutes = Math.floor((distance % (hour)) / (minute));
  const seconds = Math.floor((distance % (minute)) / second);
  
  return {distance, days, hours, minutes, seconds}
}

export const CountdownView: FunctionComponent<CustomWidgetCountdownProps> = ({ title, showtitle, titlecolor, boxescolorbg, boxescolorborder, boxescolortext, countdowndate, expiredmessage }: CustomWidgetCountdownProps) => {

    const [ actualdate, setactualdate ] = React.useState(Date.now());
    const { distance, days, hours, minutes, seconds } = calculatedifference(actualdate,countdowndate)
    React.useEffect(()=>{ setInterval(()=>{setactualdate(Date.now())},1000) },[])

    const isTitleShown = typeof showtitle == "string" ? showtitle === "true" : !!showtitle;

    return ( <div>
        { isTitleShown ? 
            <Title 
                title={title}
                titlecolor={titlecolor} /> 
            : ''
        }
        { distance < 0 ?  
        <Card
            boxescolorbg={boxescolorbg}
            boxescolorborder={boxescolorborder}
            boxescolortext={boxescolortext} >
            <ExpiredCard 
                expiredmessage={expiredmessage}/>
        </Card>
        :
        <Card
            boxescolorbg={boxescolorbg}
            boxescolorborder={boxescolorborder}
            boxescolortext={boxescolortext} >
            <CountdownCard
                days={days} 
                hours={hours}
                minutes={minutes} 
                seconds={seconds} />
        </Card> }
    </div> )
};
