'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isFunction = require('lodash.isfunction');
var React = require('react');
var swal = typeof window !== 'undefined' ? require('sweetalert') : null;
var pick = require('lodash.pick');

var SweetAlert = (function (_React$Component) {
  _inherits(SweetAlert, _React$Component);

  function SweetAlert() {
    _classCallCheck(this, SweetAlert);

    _get(Object.getPrototypeOf(SweetAlert.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SweetAlert, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var isOpen = this.props.isOpen;

      if (isOpen && isFunction(swal)) {
        var options = pick(this.props, Object.keys(SweetAlert.defaultProps));
        swal(options, function (result) {
          if (_this.props.callback) {
            _this.props.callback(result);
          }
        });
      }

      return null;
    }
  }]);

  return SweetAlert;
})(React.Component);

SweetAlert.displayName = 'SweetAlert';

SweetAlert.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,

  type: React.PropTypes.oneOf(['warning', 'error', 'success', 'info']),
  text: React.PropTypes.string,
  title: React.PropTypes.string,
  allowEscKey: React.PropTypes.bool,
  customClass: React.PropTypes.string,
  allowOutSideClick: React.PropTypes.bool,
  showCancelButton: React.PropTypes.bool,
  showConfirmButton: React.PropTypes.bool,
  confirmButtonText: React.PropTypes.string,
  confirmButtonColor: React.PropTypes.string,
  cancelButtonText: React.PropTypes.string,
  closeOnConfirm: React.PropTypes.bool,
  closeOnCancel: React.PropTypes.bool,
  imageUrl: React.PropTypes.string,
  imageSize: React.PropTypes.string,
  timer: React.PropTypes.number,
  html: React.PropTypes.bool,
  animation: React.PropTypes.bool,
  inputType: React.PropTypes.string,
  inputPlaceholder: React.PropTypes.string,
  inputValue: React.PropTypes.string,

  callback: React.PropTypes.func
};

SweetAlert.defaultProps = {
  type: 'warning',
  text: 'Are you sure you want to do this?',
  title: 'Are you sure?',
  allowEscKey: true,
  customClass: null,
  allowOutSideClick: false,
  showCancelButton: true,
  showConfirmButton: true,
  confirmButtonText: 'Confirm',
  confirmButtonColor: '#AEDEF4',
  cancelButtonText: 'Cancel',
  closeOnConfirm: true,
  closeOnCancel: true,
  imageUrl: null,
  imageSize: '80x80',
  timer: null,
  html: false,
  animation: true,
  inputType: 'text',
  inputPlaceholder: null,
  inputValue: null
};

module.exports = SweetAlert;