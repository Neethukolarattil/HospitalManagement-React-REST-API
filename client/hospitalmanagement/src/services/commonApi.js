import axios from 'axios'
 
const commonApi=(requestMethod,requestUrl,requestBody)=>{
    const config={
        method:requestMethod,
        url:requestUrl,
        data:requestBody,
        header:{"content-Type":"application/json"}
    }
    return axios(config)


}
export default commonApi