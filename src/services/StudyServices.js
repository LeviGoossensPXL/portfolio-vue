"use strict"

function getStudyById(id) {
    return fetch(`http://localhost:3000/studies/${id}`)
        .then((response) => response.json());
}

function getStudies() {
    return fetch(`http://localhost:3000/studies`)
        .then((response) => response.json());
}

export default {
    getStudyById,
    getStudies,
}