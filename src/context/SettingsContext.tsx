


import {FC, createContext, useState} from 'react';

const ENABLED : true = true;
const DISABLED : false = false;

interface ISettings{
    itemAddedPopUp: boolean;
    itemDeletedPopUp: boolean;
}

export let DefaultSettings: ISettings = {
    itemAddedPopUp: ENABLED,
    itemDeletedPopUp: ENABLED
};


interface ISettingsContext{
    settings: ISettings;
    setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
}

export const SettingsContext = createContext({settings: {} as ISettings, setSettings:  () =>{} } as ISettingsContext);

interface ISettingsProvider{
    children: React.ReactNode;
}

const SettingsProvider : FC<ISettingsProvider> = ({children}) =>{

    const [settings, setSettings] = useState<ISettings>(DefaultSettings);

    return(
        <SettingsContext.Provider value={{settings, setSettings}}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
