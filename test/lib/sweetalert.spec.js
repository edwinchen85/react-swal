/*globals describe beforeEach it */

'use strict'

const jsdom = require('mocha-jsdom')
const React = require('react')
const TestUtils = require('react-addons-test-utils')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const randomString = require('random-string')
const Chance = require('chance')
const chance = new Chance()

describe('<SweetAlert />', function () {
  jsdom()

  let SweetAlert, mock

  describe('when sweetalert does not load', () => {
    beforeEach(function () {
      SweetAlert = proxyquire.noCallThru().load('../../lib/sweetalert', {
        'sweetalert': { isThisAFunction: 'nope' }
      })
    })

    it('should not throw', () => {
      (function () {
        TestUtils.renderIntoDocument(<SweetAlert isOpen />)
      }).should.not.throw()
    })
  })

  beforeEach(function () {
    mock = sinon.expectation.create('sweetalert')
    mock.never()

    SweetAlert = proxyquire.noCallThru()
      .load('../../lib/sweetalert', {
        'sweetalert': mock
      })
  })

  describe('when isOpen is false', function () {
    beforeEach(function () {
      TestUtils.renderIntoDocument(<SweetAlert isOpen={false} />)
    })

    it('does nothing', function () {
      mock.verify()
    })
  })

  describe('when isOpen is true', function () {
    beforeEach(function () {
      mock.once()
    })

    describe('not specifying props', function () {
      beforeEach(function () {
        TestUtils.renderIntoDocument(<SweetAlert isOpen />)
      })

      it('uses default options', function () {
        mock.verify()

        let call = mock.getCall(0)
        call.args[0].should.eql(SweetAlert.defaultProps)
        call.args[1].should.be.type('function')
      })
    })

    describe('specifying props', function () {
      let props = {
        type: 'error',
        text: randomString(),
        title: randomString(),
        allowEscKey: false,
        customClass: randomString(),
        allowOutSideClick: true,
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: randomString(),
        confirmButtonColor: randomString(),
        cancelButtonText: randomString(),
        closeOnConfirm: false,
        closeOnCancel: false,
        imageUrl: chance.url(),
        imageSize: '1024x768',
        timer: chance.natural(),
        html: true,
        animation: false,
        inputType: 'password',
        inputPlaceholder: randomString(),
        inputValue: randomString()
      }

      beforeEach(function () {
        mock.once()

        TestUtils.renderIntoDocument(<SweetAlert isOpen {...props} />)
      })

      it('overrides the default', function () {
        mock.verify()

        let call = mock.getCall(0)
        let options = call.args[0]

        Object.keys(props).forEach((prop) => options[prop].should.eql(props[prop]))
      })
    })
  })
})
