const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.listPosts().then(supplies => {
        response.json({supplies});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read("supplies", request.params.id).then(supplies => {
        supplies
            ? response.json({supplies})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create("supplies", request.body).then(supplies => {
        response.status(201).json({supplies: supplies});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete("supplies", request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update("supplies", request.params.id, request.body).then(supplies => {
        response.json({supplies: supplies[0]});
    }).catch(next);
});

module.exports = router;
