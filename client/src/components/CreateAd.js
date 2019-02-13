import React from 'react'
import {connect} from 'react-redux'
import {createAd} from '../actions/ads'

class CreateAd extends React.Component {
  state = {
    title: '',
    description: '',
    imageUrl: '',
    price: '',
    email: '',
    phoneNumber: ''
  }

  onChange = (ad) => {
    this.setState({
      [ad.target.name]: ad.target.value
    })
  }

  onSubmit = (ad) => {
    ad.preventDefault();
    this.setState({
        title: '',
        description: '',
        imageUrl: '',
        price: '',
        email: '',
        phoneNumber: ''
    })
    this.props.createAd(this.state)
  }

  render() {
    return(
        <form onSubmit={this.onSubmit}>
            <label>Title:
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                </label> <br></br>
            <label>Description:
                <input type="text" name="description" value={this.state.description} onChange={this.onChange} />
                </label><br></br>
            <label>imageUrl:
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onChange} />
            </label><br></br>
            <label>price:
                <input type="text" name="price" value={this.state.price} onChange={this.onChange} />
            </label><br></br>
            <label>email:
                <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
            </label><br></br>
            <label>phoneNumber:
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} />
            </label><br></br>
          <input type="submit" value="Submit" />
          </form>
    )
  }
}

export default connect(null, {createAd})(CreateAd)