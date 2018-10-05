const log = require('./log');
const utils = require('./utils');
const manager = require('../room/manager');
module.exports.loop = function () {
    log.tick();
    let activeRooms = utils.getActiveRooms();

    for (const currentRoom in activeRooms) {
        manager.manage(currentRoom);
    }
};