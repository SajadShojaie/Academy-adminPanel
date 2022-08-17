//takes a key and value pair and adds it to localStorage.
const setItem = (key, value) => {
  localStorage.setItem(key, value)
}

//takes a key and returns the corresponding value.
const getItem = (key) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return false
  }
}

//clear local storage
const clearStorage = () => {
  localStorage.clear()
}

//takes a key and removes the corresponding key-value pair //check the code
const clearItem = (key) => {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key)
  } else {
    return false
  }
}

export { setItem, getItem, clearStorage, clearItem }
