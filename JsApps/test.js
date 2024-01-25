var HttpStatus = require('http-status-codes');

response
    .status(HttpStatus.OK)
    .send('ok');

response
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send({
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    });
