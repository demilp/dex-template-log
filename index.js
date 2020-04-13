export default function logger(appName) {
  return function (message) {
    var l = {
      type: "log",
      content: { tag: `[${appName}]`, message: message },
      origin: "DexTemplate",
    };
    console.log(l.content.message);
    window.parent.postMessage(l, "*");
    if(message instanceof Error){
      console.trace();
    }
  };
}
