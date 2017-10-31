'use strict'

const isFunction = require('lodash.isfunction')
const React = require('react')
const PropTypes = require('prop-types')
const swal = typeof window !== 'undefined' ? require('sweetalert') : null
const pick = require('lodash.pick')

class SweetAlert extends React.Component {
  render () {
    let isOpen = this.props.isOpen

    if (isOpen && isFunction(swal)) {
      let options = pick(this.props, Object.keys(SweetAlert.defaultProps))
      swal(options, (result) => {
        if (this.props.callback) {
          this.props.callback(result)
        }
      })
    }

    return null
  }
}

SweetAlert.displayName = 'SweetAlert'

SweetAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,

  type: PropTypes.oneOf([
    'warning',
    'error',
    'success',
    'info'
  ]),
  text: PropTypes.string,
  title: PropTypes.string,
  allowEscKey: PropTypes.bool,
  customClass: PropTypes.string,
  allowOutSideClick: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  cancelButtonText: PropTypes.string,
  closeOnConfirm: PropTypes.bool,
  closeOnCancel: PropTypes.bool,
  imageUrl: PropTypes.string,
  imageSize: PropTypes.string,
  timer: PropTypes.number,
  html: PropTypes.bool,
  animation: PropTypes.bool,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,

  callback: PropTypes.func
}

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
}

module.exports = SweetAlert
