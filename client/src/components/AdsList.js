import React from 'react'
import {loadAds} from '../actions/ads'
import {connect} from 'react-redux'

class AdsList extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    if (this.props.ads === null) return 'Loading...'
    console.log(this.props.ads)
    return (
    <div>
        <ul>
            {this.props.ads && this.props.ads.advertisements.map(ad =>  (
            <li key={ad.id}>{ad.title}</li>
            ))}
            { !this.props.ads && <li>Loading ads...</li> }
            </ul>
    </div> )
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdsList)