import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import s from './Loader.module.css'
import { Loader } from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {

    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(!isLoading))

        setTimeout(() => dispatch(loadingAC(isLoading)), 1500)
    }

    return (
        <div id={'hw10'}>
            <div className={`${s2.hwTitle} ${s.title}`}>Homework #10</div>
            <div className={`${s2.hw} ${s.buttonWrapper}`}>
                <div className={s2.container}>
                    {isLoading ? (
                        <div id={'hw10-loading'}>
                            <Loader />
                        </div>
                    ) : (
                        <SuperButton
                            id={'hw10-button-start-loading'}
                            xType=''
                            onClick={setLoading}
                        >
                            Set loading...
                        </SuperButton>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HW10
