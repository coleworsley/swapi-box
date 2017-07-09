export var loadFromLocal = (component) => {
  var newState
  const oldState = Object.assign({}, component.state)
  const localStorageKeys = Object.keys(localStorage)
  if (localStorage.length) {
      newState = localStorageKeys.reduce( (accu, element) => {
      accu[element] = JSON.parse(localStorage.getItem(element))
      return accu
    }, {})
  }
  component.setState(Object.assign(oldState, newState))
}
