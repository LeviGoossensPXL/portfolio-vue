"use strict"

function getExperienceById(id) {
    return fetch(`http://localhost:3000/experiences/${id}`)
        .then((response) => response.json());
}

function getExperiences() {
    return fetch(`http://localhost:3000/experiences`)
        .then((response) => response.json());
}

export default {
    getExperienceById,
    getExperiences,
}