import axios from "axios"

import { getToken } from "utils/user"
import { TIMES } from "utils/time"

const API_URL = "https://reactnd-books-api.udacity.com/"

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: getToken(),
        "Content-Type": "application/json"
    },
    timeout: TIMES.TEN_SECONDS
})

export default http
