'use strict'

const isFunction = require('lodash.isfunction')
const React = require('react')
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
  isOpen: React.PropTypes.bool.isRequired,

  type: React.PropTypes.oneOf([
    'warning',
    'error',
    'success',
    'info'
  ]),
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
