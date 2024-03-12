const {app, BrowserWindow} = require("electron");
require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});
//função para criar uma janela do electron
//de 800 x 600

function  creatWindow() {
    const win = new BrowserWindow(
        {
        width: 800,
        height: 600
        }
    );
    
    win.loadFile("index.html");
}
//cria a janela quando o electron terminou de carregar
app.whenReady().then(creatWindow);