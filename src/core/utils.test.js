const utils = require('./utils');

test('getActiveRooms behaves correctly', () => {
    global.Game = {
        rooms : { W6N33: {}}
    };
    expect(utils.getActiveRooms()).toEqual({
        W6N33: {}
    });
    }
);