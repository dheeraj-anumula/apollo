import { BASE_URL } from 'constants/api'
import axios, { AxiosResponse } from 'axios'

const getURL = ( path : string) => `${BASE_URL}/${path}`

const fetchData = async <T> ( path : string ) : Promise<T> => {
    const response = await axios.get<T>(getURL(path))
    return response.data
}

const postData = async (path:string, data : any) : Promise<AxiosResponse<any>> => {
    const response = await axios.post(getURL(path), data)
    return response
}

const deleteData = async (path:string) : Promise<AxiosResponse<any>> => {
    const response = await axios.delete(getURL(path))
    return response
}

export {
    fetchData,
    postData,
    deleteData
}
