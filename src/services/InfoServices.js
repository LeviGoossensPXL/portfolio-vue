"use strict"

function getInfo() {
    return fetch(`http://localhost:3000/personal_info`)
        .then(response => response.json())
}

export default {
    getInfo
}