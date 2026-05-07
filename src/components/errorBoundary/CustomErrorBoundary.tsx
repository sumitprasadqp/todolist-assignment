// CustomErrorBoundary.tsx
import React, {Component, type ReactNode} from 'react'

interface IProps {
  children: ReactNode
  fallback?: ReactNode
}

interface IState {
  hasError: boolean
  error?: Error
}

export class CustomErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error): IState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Error caught by Error Boundary:', error, info)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div style={styles.container}>
          <h2>Something went wrong.</h2>
          <p style={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '20px',
    border: '1px solid #ff4d4f',
    borderRadius: '8px',
    backgroundColor: '#fff1f0',
    color: '#a8071a',
  },
  message: {
    marginTop: '10px',
    fontSize: '14px',
  },
}
