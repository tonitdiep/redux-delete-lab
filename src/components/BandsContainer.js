import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log('BandsContainer', this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  
  deleteBand: id => dispatch({ type: "DELETE_BAND", id}) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// addBand: band => dispatch({ type: "ADD_BAND", name }),