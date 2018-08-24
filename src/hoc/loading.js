import _ from "lodash"
import PropTypes from "prop-types"
import React from "react"

import PageLoader from "components/PageLoader"

const loading = fetch => Component => {

    class Loading extends React.Component {

        static propTypes = {
            children: PropTypes.oneOfType([
                PropTypes.array,
                PropTypes.object
            ]).isRequired
        }

        state = {
            list: []
        }

        componentDidMount() {
            fetch()
                .then(list => this.setState({ list }))
        }

        render() {
            const { children } = this.props
            const { list } = this.state
            return _.isEmpty(list) ? <PageLoader/> : <Component shelfs={ list }>{ children }</Component>
        }

    }

    return Loading

}

export { loading }
