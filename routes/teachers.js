const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list("teachers").then(teachers => {
        response.json({teachers});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read("teachers",request.params.id).then(teachers => {
        teachers
            ? response.json({teachers})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create("teachers",request.body).then(teachers => {
        response.status(201).json({teachers: teachers});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete("teachers",request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update("teachers",request.params.id, request.body).then(teachers => {
        response.json({teachers: teachers[0]});
    }).catch(next);
});

module.exports = router;
