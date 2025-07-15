"use strict"

function getStudyById(id) {
    return fetch(`http://localhost/api/studies/${id}`)
        .then((response) => response.json());
}

function getStudies() {
    return fetch(`http://localhost/api/studies`)
        .then((response) => response.json());
}

export default {
    getStudyById,
    getStudies,
}