export default function logger(appName) {
  return function (message) {
    var l = {
      type: "log",
      content: { tag: `[${appName}]`, message: message },
      origin: "DexTemplate",
    };
    if (message instanceof Error) console.error(message.message || message);
    else console.log(message);
    window.parent.postMessage(l, "*");
  };
}
