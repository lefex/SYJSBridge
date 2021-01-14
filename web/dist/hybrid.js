import SYBridge from '../../packages/sy-webview-bridge/src/index.js';

;(function() {
    // set the namespace sy
    const namespace = 'sy';
    // add bride object to window
    const sy = new SYBridge();
    window[namespace] = sy;
    // tell app that my namespace is sy
    sy.env.setEnvironment({
        namespace
    });
    // add custom plugin
    let requestPlugin = new NetworkPlugin(sy.core, 'network');
    sy.registerPlugin(requestPlugin);
    // observe webview lifecycle
    let that = this;
    sy.lifecycle = {
        onLoad() {
            that.lifecycles.push('onLoadd');
        },
        onShow() {
            that.lifecycles.push('onShow');
        },
        onHide() {
            that.lifecycles.push('onHide');
        },
        onUnload() {
            that.lifecycles.push('onUnload');
        }
    };
})();