'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRefetch = require('react-refetch');

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _FlaskLoaderIcon = require('./FlaskLoaderIcon.js');

var _FlaskLoaderIcon2 = _interopRequireDefault(_FlaskLoaderIcon);

var _MarkerGeneProfile = require('./MarkerGeneProfile.js');

var _MarkerGeneProfile2 = _interopRequireDefault(_MarkerGeneProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerGeneSearchResults = function MarkerGeneSearchResults(props) {
  var markerGeneFetch = props.markerGeneFetch;


  if (markerGeneFetch.fulfilled) {
    return _react2.default.createElement(
      'div',
      { className: 'row margin-bottom-xlarge' },
      _react2.default.createElement(
        'div',
        { className: 'small-12 columns' },
        markerGeneFetch.value.length > 0 ? markerGeneFetch.value.map(function (e) {
          return _react2.default.createElement(
            'div',
            { className: 'column row ' },
            _react2.default.createElement(_MarkerGeneProfile2.default, _extends({ key: e.url }, e))
          );
        }) : _react2.default.createElement(
          'p',
          null,
          'Sorry, no marker gene profiles could be found for ',
          props.geneId,
          '.'
        )
      )
    );
  } else if (markerGeneFetch.pending) {
    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'small-12 columns text-center' },
        _react2.default.createElement(_FlaskLoaderIcon2.default, { width: '50', height: '50' })
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { style: { textAlign: 'center' }, className: 'small-12 columns text-center' },
        _react2.default.createElement(
          'p',
          null,
          'Error loading search results'
        )
      )
    );
  }
};

MarkerGeneSearchResults.propTypes = {
  atlasUrl: _propTypes2.default.string.isRequired,
  geneId: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactRefetch.connect)(function (props) {
  return {
    markerGeneFetch: (0, _urijs2.default)('json/markerGenes/' + props.geneId, props.atlasUrl).toString()
  };
})(MarkerGeneSearchResults);