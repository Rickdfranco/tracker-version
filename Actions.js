import axios from 'axios';
import {
    GET_ALL_USERS,
    GET_SPECIFIC_USER,
    get_user_Id,
    get_seriel_number,
    get_manufacturer,
    get_model,
    get_computer_name,
    get_location,
    get_operating_system,
    get_os_architchre,
    get_total_system_memory,
    get_video,
    get_video_memory,
    get_dns_domain,
    get_last_known_ip,
    get_mac
} from '../Constants';

export const getAllUsers = () => async dispatch => {
    let response = await axios.get('')
    dispatch({ type: GET_ALL_USERS, user: response.data })
}

export const getSpecificUser = (id) => async    dispatch => {
    let response = await axios.get('')
    dispatch({ type: GET_SPECIFIC_USER, userData: response.data })
}

export const getUserId = (id) => async dispatch => {
    let response = await axiot.get('')
    dispatch({ type: get_user_Id, user: response.data })
}
export const getSerielNumber = () => async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_seriel_number, user: response.data })
}

export const getManufacturer = () => async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_manufacturer, user: response.data })
}

export const get_model = () => async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_model, user: response.data })
}

export const getComputerName = () =>    async  dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_computer_name, user: response.data })
}

export const getLocation = () => async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_location, user: response.data })
}

export const getOperatingSystem = () => async dispatch => {
    let response = await axios.get('')
    disptach({ type: get_operating_system, user: response.data })
}

export const getOsArchitchre = () => async disptach => {
    let response = await axios.get('')
    dispatch({ type: get_os_architchre, user: response.data })
}

export const getTotalSystemMomory = () =>async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_total_system_memory, user: response.data })
}

export const getVideo = () =>   async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_video, user: response.data })
}

export const getVideoMemory = () =>async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_video_memory, user: response.data })
}

export const getDnsDomain = () =>async dispatch => {
    let response = await axios.get('')
    disptach({ type: get_dns_domain, user: response.data })
}

export const getLastKnowIp = () =>async dispatch => {
    let response = await axios.get('')
    dispatch({ type: get_last_known_ip, user: response.data })
}

export const getMac = (id) =>async dispatch => {
    let responcse = await axios.get('')
    dispatch({ type: get_mac, user: response.data })
}