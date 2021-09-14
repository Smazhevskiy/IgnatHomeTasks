import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloaderGif from './common/loading.gif'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC(true))
        // setTimeout
        const start = setTimeout(() => {
            dispatch(loadingAC(false))
            clearTimeout(start)
        }, 2000)


        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={preloaderGif} alt="preloader.gif"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
