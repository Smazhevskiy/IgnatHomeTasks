import React, {DetailedHTMLProps, InputHTMLAttributes, useEffect, useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";


export type ThemesType = 'dark' | 'red' | 'some';

const themes:Array<ThemesType> = ['dark', 'red', 'some'];

type HW12Type = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const HW12: React.FC<HW12Type> = React.memo((
    {
        value, name, onChange
    }
) => {
    const dispatch = useDispatch();
    const theme = useSelector<AppStoreType, any>(state => state.theme)


    // useDispatch, onChangeCallback


    const onChangeCallback = (e: any) => {
        onChange && onChange(e)
        dispatch(changeThemeAC(e.currentTarget.value))
    }


    const mappedThemes: any = themes ? themes.map((th, i) => (
        <label key={th + '-' + i}>
            <input
                type={'radio'}
                name={name}
                value={th}
                checked={th === theme}
                onChange={onChangeCallback}


                // onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {th}
        </label>
    )) : []

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {mappedThemes}
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
});

export default HW12;
