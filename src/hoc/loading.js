import _ from "lodash"
import React from "react"

import PageLoader from "components/PageLoader"

const loading = fetch => Component => {

    class Loading extends React.Component {

        state = {
            shelfs: {}
        }

        componentDidMount() {
            fetch()
                .then(({ shelfs }) => this.setState({ shelfs }))
        }

        render() {
            const { shelfs } = this.state
            return _.isEmpty(shelfs) ? <PageLoader/> : <Component shelfs={ shelfs }/>
        }

    }

    return Loading

}

export { loading }
