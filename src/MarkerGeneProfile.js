import React from 'react'
import PropTypes from 'prop-types'

const MarkerGeneProfile = (props) =>
<div>
  <a href={props.url}>{props.experimentAccession} – {props.k}</a>
</div>

MarkerGeneProfile.propTypes = {
  experimentAccession: PropTypes.string.isRequired,
  k: PropTypes.number.isRequired,
  clusters: PropTypes.arrayOf(PropTypes.shape({
    clusterId: PropTypes.number.isRequired,
    p: PropTypes.number.isRequired
  })).isRequired,
  url: PropTypes.string.isRequired
}

export default MarkerGeneProfile
