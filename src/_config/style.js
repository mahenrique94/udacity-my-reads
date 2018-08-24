import "normalize.css"

import "react-bulma-components/dist/react-bulma-components.min.css"
import "react-notifications/lib/notifications.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import * as faIcons from "@fortawesome/free-solid-svg-icons"

import "css/override.css"

const icons = Object.entries(faIcons)
    .map(([ , value ]) => value)
    .filter(({ icon }) => !!icon)

library.add(icons)
