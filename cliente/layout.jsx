import React from 'react'

// Template base
class Layout extends React.Component {
  render () {
    return (
      <html lang='es-CO'>
        <head>
          <meta charSet='utf-8' />
          <title>{ this.props.title }</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='stylesheet' href='/assets/css/style.css' />
        </head>
        <body>
          { this.props.children }
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
}

export default Layout
