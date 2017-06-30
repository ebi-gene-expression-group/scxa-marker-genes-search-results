'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkerGeneProfile = function MarkerGeneProfile(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'a',
      { href: props.url },
      props.experimentAccession,
      ' \u2013 ',
      props.perplexity
    )
  );
};

MarkerGeneProfile.propTypes = {
  experimentAccession: _propTypes2.default.string.isRequired,
  perplexity: _propTypes2.default.number.isRequired,
  clusters: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    clusterId: _propTypes2.default.number.isRequired,
    p: _propTypes2.default.number.isRequired
  })).isRequired,
  url: _propTypes2.default.string.isRequired
};

exports.default = MarkerGeneProfile;