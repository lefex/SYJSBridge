/**
 * @description network request
 * @file requestPlugin.js
 * @author suyan
*/

import {SYPlugin} from '../src/plugins/plugin';

export default class NetworkPlugin extends SYPlugin {
    request(options) {
        this.core.sendMsg(this.router('request'), options);
    }
}
