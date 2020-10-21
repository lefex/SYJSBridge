
An iOS *modern bridge* for sending messages between Objective-C and JavaScript in WKWebView. Include FE and iOS.

The project is in the beta phase and is being used in my own projects.

![logo](https://s1.ax1x.com/2020/10/10/06u4dP.md.png)

## Documentation

[Docs Detail](https://lefex.github.io/SYWebViewBridge/)

```js
npm run docs
npm run docs:dev
```

### Use in FE

`sy-webview-bridge` provide a system plugin that can show a modal alert in App. This code to show a modal alert and will receive a success callback when user click OK or Cancel button.

```js
sy.system.showModal({
    title: 'SYWebViewBridge',
    content: 'An iOS modern bridge for sending messages between Objective-C and JavaScript in WKWebView.',
    showCancel: true,
    cancelText: 'Cancel',
    confirmText: 'OK',
    // success
    success: function(res) {
        if (res.confirm) {
            // user click OK button
        }
        else {
            // user click Cancel button
        }
    },
    // fail
    fail: function(err) {
        console.log(err);
    },
    // call when success or fail
    complete: function(res) {
        console.log(res);
    }
});
```
[more docs](https://lefex.github.io/SYWebViewBridge/)

## Use in iOS

You need to download the project [SYWebViewBridge](https://github.com/lefex/SYWebViewBridge) to use in iOS。

## Questions

If you have any questions, you can pay attention to my wechat official account 素燕. 

![](https://s1.ax1x.com/2020/10/10/06VvOx.png)

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/lefex/SYWebViewBridge/blob/master/.github/contributing.md) before making a pull request.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Suyan Wang
