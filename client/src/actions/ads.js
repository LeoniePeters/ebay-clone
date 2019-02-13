import request from 'superagent'

export const ADS_FETCHED = 'ADS_FETCHED'

const baseUrl = 'http://localhost:4000'

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
})

export const loadAds = () => (dispatch, getState) => {
  if (getState().ads) return

  request(`${baseUrl}/`)
    .then(response => {
      dispatch(adsFetched(response.body))
    })
    .catch(console.error)
}

export const AD_FETCHED = 'AD_FETCHED'

const adFetched = ad => ({
  type: AD_FETCHED,
  ad
})

export const loadAd = (id) => (dispatch, getState) => {
  if (getState().ad) return
  request(`${baseUrl}/ad/${id}`)
    .then(response => {
      dispatch(adFetched(response.body))
    })
    .catch(console.error)
}

export const AD_CREATE_SUCCESS = 'AD_CREATE_SUCCESS'

const adCreateSuccess = ad => ({
  type: AD_CREATE_SUCCESS,
  ad
})

export const createAd = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/sellerpage`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body))
    })
    .catch(console.error)
}