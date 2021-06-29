import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer P0XRgOVp3ls3uJbIEeD5ByGpn5xZcJxO1aQmitlxKtMox0-u_v7uKER-uzCpya20eJUimv97EbyGh-iMhSxXYNNj5ii8-imHjKs9ObL_NLJnQ-H87eu6aOWZlP7JYHYx'
    }
})