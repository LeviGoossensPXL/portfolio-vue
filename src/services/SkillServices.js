"use strict"

function getSkillsOfType(type) {
    return fetch(`http://localhost:3000/skills?type=${type}`)
        .then(response => response.json())
}

export default {
    getSkillsOfType
}