import React from 'react'

/**
 * Utils for Composing Higher-Order Components
 * ===========================================
 */
export class Composer {

    // Bind a few properties statically
    static bind = (data) => (Component) => {
        return (props) => (
            <Component {...data} {...props} />
        )
    }

    // Bind a stream to a property so that the component will re-render upon changes
    static sync = (stream, key) => (Component) => {
        return class extends React.Component {
            componentDidMount() { stream.subscribe(state => this.setState({ [key]: state })) }
            render = () => <Component {...this.state} {...this.props} />
        }
    }

    static build = (Component) => <Component/>
}