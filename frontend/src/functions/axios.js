import Axios from "axios";

const steamLoginService="http://localhost:8100/";


export function axiosSteam(method, urlExtenstion,data=[])
{
    Axios(
    {
        method:method,
        url:steamLoginService+urlExtenstion,
        data:data
    });
}
