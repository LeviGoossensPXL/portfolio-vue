"use strict"

function getSkillsOfType(type) {
    return fetch(`http://localhost/api/skills?type=${type}`)
        .then(response => response.json())
}

export default {
    getSkillsOfType
}