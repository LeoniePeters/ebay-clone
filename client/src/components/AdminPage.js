import React from 'react'
import {loadAds} from '../actions/ads'
import {connect} from 'react-redux'

class AdminPage extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    if (this.props.ads === null) return 'Loading...'
    
    return (
    <div>
        <ul>
            {this.props.ads && this.props.ads.advertisements.map(ad =>  (
            <li key={ad.id}>
            Title: {ad.title} Price: €{ad.price}</li>
            ))}
            { !this.props.ads && <li>Loading ads...</li> }
            </ul>

    </div> )
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdminPage)