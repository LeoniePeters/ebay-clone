import { ADS_FETCHED, AD_CREATE_SUCCESS } from '../actions/ads'

export default(state = null, action = {}) => {
    switch (action.type) {
        case ADS_FETCHED:
        return action.ads
        case AD_CREATE_SUCCESS:
        if (state === null) {
            return state
        } else {
            return [
                ...state,
                action.ad
            ]
        }
        
        default:
        return state

    }
}