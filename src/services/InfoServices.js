"use strict"

function getInfo() {
    return fetch(`http://localhost/api/personal_info`)
        .then(response => response.json())
}

export default {
    getInfo
}