import _ from "lodash"
import React from "react"

import PageLoader from "components/PageLoader"

const loading = fetch => Component => {

    class Loading extends React.Component {

        state = {
            list: []
        }

        componentDidMount() {
            fetch()
                .then(list => this.setState({ list }))
        }

        render() {
            const { list } = this.state
            return _.isEmpty(list) ? <PageLoader/> : <Component shelfs={ list }/>
        }

    }

    return Loading

}

export { loading }
