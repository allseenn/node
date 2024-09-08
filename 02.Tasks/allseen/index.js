const os = require('os');

module.exports = {
    cpus: os.cpus(),
    arch: os.arch(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
    loadavg: os.loadavg(),
    type: os.type(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    networkInterfaces: os.networkInterfaces(),
    hostname: os.hostname(),
    homedir: os.homedir(),
    tmpdir: os.tmpdir(),
    userInfo: os.userInfo()
}
