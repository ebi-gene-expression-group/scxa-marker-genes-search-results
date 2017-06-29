import React from 'react'
import ReactDOM from 'react-dom'

import MarkerGenesList from '../src/index.js'

const render = function (options, target) {
  ReactDOM.render(<MarkerGenesList {...options} />, document.getElementById(target))
}

export {render}
