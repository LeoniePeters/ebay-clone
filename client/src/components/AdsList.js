import React from 'react'
import {loadAds} from '../actions/ads'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AdsList extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    if (this.props.ads === null) return <Link to={'/sellerpage'}>Click here if you want to place an ad!</Link>
    
    return (
    <div>
        <ul>
            {this.props.ads && this.props.ads.advertisements.map(ad =>  (
            <li key={ad.id}><Link to={'/ad/' + ad.id}>
            Title: {ad.title} Price: €{ad.price}</Link></li>
            ))}
            { !this.props.ads && <li>Loading ads...</li> }
            </ul>

            <Link to={'/sellerpage'}>Click here if you want to place an ad!</Link>
    </div> )
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps, {loadAds})(AdsList)