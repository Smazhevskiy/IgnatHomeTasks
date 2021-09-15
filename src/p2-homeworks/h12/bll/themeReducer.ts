import {ThemesType} from "../HW12";

const initState: any = []

type ChangeThemeAT = {
    type: 'CHANGE-THEME'
    colorTheme: string
}

export const themeReducer = (state: ThemesType = initState, action: ChangeThemeAT): ThemesType | string => {
        switch (action.type) {
            case "CHANGE-THEME":
                return action.colorTheme
            default:
                return state;
        }
    }
;

export const changeThemeAC = (colorTheme: string): ChangeThemeAT => {
    return {type: "CHANGE-THEME", colorTheme}
};

