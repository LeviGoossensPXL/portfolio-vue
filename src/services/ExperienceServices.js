"use strict"

function getExperienceById(id) {
    return fetch(`http://localhost/api/experiences/${id}`)
        .then((response) => response.json());
}

function getExperiences() {
    return fetch(`http://localhost/api/experiences`)
        .then((response) => response.json());
}

export default {
    getExperienceById,
    getExperiences,
}