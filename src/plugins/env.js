/**
 * @description environment message
 * @file env.js
 * @author suyan
*/

import {SYPlugin} from './plugin';

export default class SYEnv extends SYPlugin {
    setEnvironment(options) {
        this.core.sendMsg(this.router('setEnv'), options);
    }
}
