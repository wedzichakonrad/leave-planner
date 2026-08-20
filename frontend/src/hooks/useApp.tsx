import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useApp = () => {
    const appContext = useContext(AppContext);

    if (!appContext) throw Error('App context not provided');

    return appContext;
}