import React, { useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        let id = setInterval(() => {
            setDate(new Date(restoreState('hw9-date', Date.now())))
            console.log(id);
        }, 1000);

        setTimerId(Number(id));
    }

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка

    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена

    }

    let formatterTime = new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    });

    let formatterDay = new Intl.DateTimeFormat("en", {
        weekday: "long"
    });

    let formatterDate = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });

    let formatterMonth = new Intl.DateTimeFormat("en", {
        month: "long"
    });

    const stringTime = formatterTime.format(date);
    const stringDate = formatterDate.format(date);
    const stringDay = formatterDay.format(date);
    const stringMonth = formatterMonth.format(date);

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>

                <>
                    <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                    <span id={'hw9-date'}>{stringDate}</span>
                </>

                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={false} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
