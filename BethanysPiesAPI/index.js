// Bring in the express server and create application
let express = require('express');
let app = express(); // instantiate express object
let pieRepo = require('./repos/pieRepo'); // import pieRepo module
let errorHelper = require('./helpers/errorHelpers'); // import errorHelper module for exception handling
let cors = require('cors');

// use the express Router object
let router = express.Router();

// configure middleware to support JSON data parsing in request object
app.use(express.json());

// configure CORS
app.use(cors());

// create GET to return a list of all pies
router.get('/', function (req, res, next) {
    pieRepo.get(function (data) {
        // create json envelope
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
        });
    }, function(err) {
        next(err); 
    });
});

// search for pie
router.get('/search', function(req, res, next) {
    // build searchObject
    let searchObject = {
        "id": req.query.id,
        "name": req.query.name
    };
    // call pieRepo.search function
    pieRepo.search(searchObject, function(data) {
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved.",
            "data": data
        });
    }, function(err) {
        next(err);
    });
});

// get pie by id
router.get('/:id', function(req, res, next) {
    pieRepo.getById(req.params.id, function (data) {
        if(data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single pie retrieved.",
                "data": data
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function (err) {
        next(err);
    });
});

router.post('/', function(req, res, next) {
    pieRepo.insert(req.body, function(data) {
        res.status(201).json({
            "status": 201,
            "statusText": "Created",
            "message": "New Pie Added.",
            "data": data
        });
    }, function(err) {
        next(err);
    });
});

router.put('/:id', function(req, res, next) {
    pieRepo.getById(req.params.id, function(data) {
        if(data) {
            // attempt to update data
            pieRepo.update(req.body, req.params.id, function(data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK", 
                    "message": "Pie '" + req.params.id + "' updated.",
                    "data": data
                });
            });
        }
        else {
            res.status(404).send({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not be found.",
                "error" : {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err) {
        next(err);
    });
});

router.delete('/:id', function(req, res, next) {
    pieRepo.getById(req.params.id, function(data) {
        if(data) {
            // attempt to delete
            pieRepo.delete(req.params.id, function(data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The pie '" + req.params.id + "' is deleted."
                });
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id + "' could not be deleted.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be deleted."
                }
            });
        }
    }, function(err) {
        next(err);
    });
})


router.patch('/:id', function(req, res, next) {
    pieRepo.getById(req.params.id, function(data) {
        if(data) {
            // attempt to update data
            pieRepo.update(req.body, req.params.id, function(data) {
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Pie '" + req.params.id + "' patched.",
                    "data": data
                });
            });
        }
        
    })
});


// configure router so all routes are prevised with /api/v1
app.use('/api/', router);

// configure exception logger to console
app.use(errorHelper.logErrorsToConsole);
//configure exception logger to file
app.use(errorHelper.logErrorsToFile);
//configure client error handler
app.use(errorHelper.clientErrorHandler);
// configure catch-all exception middleware last
app.use(errorHelper.errorHandler);

// create server to listen on port 5000
var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});