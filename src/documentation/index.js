const express = require('express')
const router = express.Router()

//! swagger
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./src/documentation/docs.yaml')

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

module.exports = router
