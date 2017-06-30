import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-refetch'

import URI from 'urijs'

import FlaskLoaderIcon from './FlaskLoaderIcon.js'
import MarkerGeneProfile from './MarkerGeneProfile.js'

const MarkerGenesList = (props) => {

    const {markerGeneFetch} = props;

    if (markerGeneFetch.fulfilled) {
      return (
        <div className={`row`}>
          <div className={`small-12 columns`}>
            { markerGeneFetch.value.length > 0 ?
              markerGeneFetch.value.map((e) => <div className={`column row`}><MarkerGeneProfile key={e.url} {...e}/></div>) :
              <p>{props.geneId} could not be found as a marker gene in any experiments.</p> }
          </div>
        </div>
      )
    } else if (markerGeneFetch.pending) {
      return (
        <div className={`row`}>
          <div className={`small-12 columns text-center`}>
            <FlaskLoaderIcon width={`50`} height={`50`}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`row`}>
          <div style={{textAlign: `center`}} className={`small-12 columns text-center`}>
            <p>Error loading search results</p>
          </div>
        </div>
      )
    }

}

MarkerGenesList.propTypes = {
  atlasUrl: PropTypes.string.isRequired,
  geneId: PropTypes.string.isRequired
}

export default connect(props => ({
  markerGeneFetch: URI(`json/markerGenes/${props.geneId}`, props.atlasUrl).toString()
}))(MarkerGenesList)