# Help

Running this repo currently returns the following error when the page loads:

```
index.js:1375 [Vue warn]: Failed to mount component: template or render function not defined.

found in

---> <VueraInternalComponentName> at src/Test.vue
       <Root>
console.<computed> @ index.js:1375
warn @ vue.runtime.esm.js:638
mountComponent @ vue.runtime.esm.js:4015
push../node_modules/vue/dist/vue.runtime.esm.js.Vue.$mount @ vue.runtime.esm.js:8391
init @ vue.runtime.esm.js:3110
createComponent @ vue.runtime.esm.js:5932
createElm @ vue.runtime.esm.js:5880
patch @ vue.runtime.esm.js:6525
Vue._update @ vue.runtime.esm.js:3916
updateComponent @ vue.runtime.esm.js:4045
get @ vue.runtime.esm.js:4459
Watcher @ vue.runtime.esm.js:4446
mountComponent @ vue.runtime.esm.js:4052
push../node_modules/vue/dist/vue.runtime.esm.js.Vue.$mount @ vue.runtime.esm.js:8391
Vue._init @ vue.runtime.esm.js:5006
Vue @ vue.runtime.esm.js:5081
createVueInstance @ vuera.cjs.js:232
VueContainer._this.createVueInstance @ vuera.cjs.js:184
commitAttachRef @ react-dom.development.js:21338
commitLayoutEffects @ react-dom.development.js:24143
callCallback @ react-dom.development.js:363
invokeGuardedCallbackDev @ react-dom.development.js:412
invokeGuardedCallback @ react-dom.development.js:466
commitRootImpl @ react-dom.development.js:23903
unstable_runWithPriority @ scheduler.development.js:674
runWithPriority$2 @ react-dom.development.js:11834
commitRoot @ react-dom.development.js:23723
scheduleUpdateOnFiber @ react-dom.development.js:22656
scheduleRootUpdate @ react-dom.development.js:25686
updateContainerAtExpirationTime @ react-dom.development.js:25712
updateContainer @ react-dom.development.js:25812
(anonymous) @ react-dom.development.js:26370
unbatchedUpdates @ react-dom.development.js:22952
legacyRenderSubtreeIntoContainer @ react-dom.development.js:26369
render @ react-dom.development.js:26460
./src/index.js @ index.js:7
__webpack_require__ @ bootstrap:781
fn @ bootstrap:149
0 @ serviceWorker.js:135
__webpack_require__ @ bootstrap:781
checkDeferredModules @ bootstrap:45
webpackJsonpCallback @ bootstrap:32
(anonymous) @ main.chunk.js:1
Show 13 more frames
vue.runtime.esm.js:8408 You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html
webpackHotDevClient.js:120 ./src/App.js
  Line 3:  'Vue' is defined but never used  no-unused-vars
printWarnings @ webpackHotDevClient.js:120
handleWarnings @ webpackHotDevClient.js:125
push../node_modules/react-dev-utils/webpackHotDevClient.js.connection.onmessage @ webpackHotDevClient.js:190
push../node_modules/sockjs-client/lib/event/eventtarget.js.EventTarget.dispatchEvent @ eventtarget.js:56
(anonymous) @ main.js:282
push../node_modules/sockjs-client/lib/main.js.SockJS._transportMessage @ main.js:280
push../node_modules/sockjs-client/lib/event/emitter.js.EventEmitter.emit @ emitter.js:53
WebSocketTransport.ws.onmessage @ websocket.js:36
webpackHotDevClient.js:65 The development server has disconnected.
Refresh the page if necessary.
```
