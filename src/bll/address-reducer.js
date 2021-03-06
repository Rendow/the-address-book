import {addressAPI} from "../dal/api";

const SET_HOUSES = 'SET_HOUSES';
const SET_STREETS = 'SET_STREETS'
const SET_HOUSE_FLAT = 'SET_HOUSE_FLAT'
const SET_CURRENT_ADDRESS = 'SET_CURRENT_ADDRESS'
const SET_CURRENT_ADDRESS_ID = 'SET_CURRENT_ADDRESS_ID'


const initialState = {
    houses: [],
    streets: [],
    houseFlat:[],
    currentAddress:null,
    currentAddressID:0,
}

export const addressReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
        case SET_STREETS:
            return {
                ...state,
                streets: action.payload
            }
        case SET_HOUSE_FLAT:
            return {
                ...state,
                houseFlat: action.payload
            }
        case SET_CURRENT_ADDRESS:
            return {
                ...state,
                currentAddress: action.payload
            }
        case SET_CURRENT_ADDRESS_ID:
            return {
                ...state,
                currentAddressID: action.payload
            }
        default:
            return state
    }
}

//actions

export const setStreetsAC = (streets) => ({
    type: SET_STREETS,
    payload: streets
})
export const setHousesAC = (houses) => ({
    type: SET_HOUSES,
    payload: houses
})
export const setHousesFlatsAC = (houseFlat) => ({
    type: SET_HOUSE_FLAT,
    payload: houseFlat
})
export const setCurrentAddressAC = (address) => ({
    type: SET_CURRENT_ADDRESS,
    payload: address
})
export const setCurrentAddressIDAC = (addressID) => ({
    type: SET_CURRENT_ADDRESS_ID,
    payload: addressID
})
//thunk

export const getStreetsTC = () => async (dispatch) => {
    try {
        let response = await addressAPI.getStreets()
        dispatch(setStreetsAC(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const getHousesTC = (id) => async (dispatch) => {
    try {
        let response = await addressAPI.getHouses(id)
        dispatch(setHousesAC(response.data))
    } catch (e) {
        console.log(e)
    }
}
export const getHousesFlatTC = (id) => async (dispatch) => {
    try {
        let response = await addressAPI.getHousesFlats(id)
        dispatch(setHousesFlatsAC(response.data))
    } catch (e) {
        console.log(e)
    }
}
