const express = require("express")
const users = expres.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypr = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

// REGISTER