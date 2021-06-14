import fs from 'fs'
import path from 'path'
import {Application} from 'express'

module.exports = (app:Application) => {
    fs
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
        .forEach(file => require(path.resolve(__dirname, file))(app))
}