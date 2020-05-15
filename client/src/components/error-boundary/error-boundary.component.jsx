import React, { Component } from 'react'

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.styles'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError(error) {
    // TODO
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/3suxlvm.png" />
          <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary