export default function Logger(appName) {
  this.appName = appName;
  this.log = function (message) {
    var l = {
      type: "log",
      content: { tag: `[${this.appName}]`, message: message },
      origin: "DexTemplate",
    };
    console.log(l.content.message);
    window.parent.postMessage(l, "*");
  };
}
