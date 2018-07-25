/**
 * Because fetch doesn't see a 40x/50x as an error we
 * make it throw an error so we can `.catch()` it
 * @param res
 * @returns {{ok}|Object}
 */
function handleStatus(res) {
  if (!res.ok) throw Error(res.statusText)

  return res
}

/**
 * Http class with methods to perform the api calls
 */
class Http {

  defaults = {
    BASE_URL: `https://swapi.co/api`
  }

  // @private
  get(url) {
    return fetch(this.defaults.BASE_URL, `${url}`)
        .then(handleStatus)
        .then(res => res.json())
  }

  getByCategory(category) {
    return this.get(`/${category}`)
  }

}

export const http = new Http()
