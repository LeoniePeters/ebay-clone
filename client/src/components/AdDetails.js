import React from 'react'
import {loadAd} from '../actions/ads'
import {connect} from 'react-redux'


class AdDetails extends React.Component {
  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id))
  }

  render(){
    if (this.props.ad === null) return 'Loading...'
    console.log(this.props.ad)
    return (
        <div>
            {this.props.ad && 
            <div>
            <h1>Title: {this.props.ad.title}</h1>
            <h2>Price: €{this.props.ad.price}</h2>
            <img src={this.props.ad.imageUrl} />
            <p>Description: {this.props.ad.description}</p>
            <p>Email address: {this.props.ad.email}</p>
            <p>Phone number: {this.props.ad.phoneNumber}</p>
            </div>
            }
            { !this.props.ad && <p>Loading ads...</p> }
           
        </div>
    )

  }
}

const mapStateToProps = state => ({
    ad: state.ad
  })
  
  export default connect(mapStateToProps, {loadAd})(AdDetails)