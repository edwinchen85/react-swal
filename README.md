# react-swal

A React wrapper for [SweetAlert](http://t4t5.github.io/sweetalert/). This is a
clone from [react-swal](https://github.com/lanetix/react-swal) with added
index.d.ts file to prevent typescript compilation error.

## Installation

```
npm install --save react-swal-type
```

## Usage

```js
const SweetAlert = require('react-swal')

;<SweetAlert
  isOpen={true}
  type="warning"
  confirmButtonText="Yup"
  cancelButtonText="Nope"
  callback={this.callback}
/>
```

## Properties

`react-swal` supports all configuration properties supported by SweetAlert. For
more info, see the "Configuration" section of the
[SweetAlert docs](http://t4t5.github.io/sweetalert/).

## License

[MIT License](http://opensource.org/licenses/mit-license.html).
