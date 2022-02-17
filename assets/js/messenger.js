console.log('messenger loaded')
window.addEventListener("message", messageHandler, false);
function messageHandler(event) {
  const { action, key, value } = event.data
  if (action == 'save'){
    window.localStorage.setItem(key, JSON.stringify(value))
  } else if (action == 'get') {
    event.source.postMessage({
      action: 'returnData',
      key: key,
      value: JSON.parse(window.localStorage.getItem(key))
    }, '*')
  }
}