// contains button functionality, message logic and animations
const {app, BrowserWindow } = require('electron')
const path = require('path') // setting up bas requirments and paths

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //preload: path.join(__dirname, 'mainSnoopy.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    //win.loadFile('snoopIndex.html')
    win.loadFile(path.join(__dirname, 'snoopyIndex.html')) // makes window load up the snoopy html file
    //win.webContents.openDevTools() // shows console errors/ opens devtools auto
}
// makes sure to run when everything is ready, prevents jumping the gun
app.whenReady().then(createWindow)