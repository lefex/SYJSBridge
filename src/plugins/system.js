/**
 * @description system message
 * @file debug.js
 * @author suyan
*/

import {SYPlugin} from './plugin';

export default class SYSystem extends SYPlugin {
    showModal(options) {
        this.core.sendMsg(this.router('showModal'), options);
    }
    isLoginSync(options) {
        return this.core.sendMsgSync(this.router('isLoginSync'), options);
    }
}
