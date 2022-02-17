console.log('messenger loaded')
function messageHandler(event) {
  console.log('handling message')
  const { action, key, value } = event.data
  if (action == 'save'){
    window.localStorage.setItem(key, JSON.stringify(value))
    console.log('saved')
    console.log(event.data)
    console.log('saved')
  } else if (action == 'get') {
    console.log('get')
    console.log(JSON.parse(window.localStorage.getItem(key)))
    console.log('get')
    event.source.postMessage({
      action: 'returnData',
      key: key,
      value: JSON.parse(window.localStorage.getItem(key))
    }, '*')
  }
}
window.addEventListener("message", messageHandler, false);
