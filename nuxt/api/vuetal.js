import axios from 'axios'
import siteinfo from 'siteinfo'
import marked from 'marked'

const build = siteinfo.build || {}
const protocol = build.protocol || process.env.VUETAL_API_PROTOCOL
const host = build.host || process.env.VUETAL_API_HOST
const port = build.port || process.env.VUETAL_API_PORT
let base = ''
if (protocol) base = `${protocol}:`
if (host) base += `//${host}`
if (port) base += `:${port}`
const apiUrl = `${base}`

// const ERROR = err => { console.error('axios error'); throw Error(err) }

class Vuetal {
  constructor () {
    this.site = siteinfo
  }

  /**
   * Fetch API with route path
   * @param {String} path current route path
   * @param {String} type page or data or null
   * @return {Promise} body of api response with Promise
   */
  async fetchApi (path, type) {
    // care of '/' and '/index'
    let url = path
    switch (type) {
      case 'page':
        if (url === '/') url = '/index'
        url = '/api/page' + url
        break
      case 'data':
        url = '/api' + url
        break
    }
    url = url.replace(/\/+$/, '')
    url = encodeURI(url)

    // apiURL is just protocal + ip + port
    const api = apiUrl + `/${url}.json`.replace(/\/+/g, '/')

    // FETCH
    // Don't throw any error. it should be handled by Vue
    let status
    let error = false
    const res = await axios.get(api).catch(err => {
      status = ((err || {}).response || {}).status
      error = err
    })
    if (status) return {res: undefined, data: {}, status, error}
    return {res: res, data: res.data, status: res.status, error}
  }

  /**
   * Convert Page data to html
   * @param {Object|String} page
   * @param {String?} ext if ext is null, page.ext will be used
   * @return {String} converted string
   */
  toHtml (page, ext) {
    if (!page) return ''
    let data
    // take both of string and page object
    if (typeof page === 'string') {
      data = page
    } else if (typeof page === 'object') {
      data = page.data
      if (!ext) ext = page.ext
    }

    // if any of ext and data doesn't exists, just return data
    if (!ext || !data) return data || ''

    // Markdown
    if (ext.match(/^\.?(md|markdown)$/i)) {
      return marked(data)
    }

    // default. just return original data
    return data
  }
}

/**
 * Helper function to get getter
 * This is for more abstractive pages/component
 *
 * @param {String} name name of vuex getter
 * @return {Function} function to link in computed field.
 */
export function getter (name) {
  return function () { return this.$store.getters[`vuetal/${name}`] }
}

/**
 * Helper function to get getters same as mapGetters of Vuex
 *
 * @param {Array} list list of name of vuex getters
 * @return {Object}
 */
export function getters (list) {
  let isArray
  if (typeof list !== 'object') list = [list]
  if (Array.isArray(list)) isArray = true
  let res = {}
  for (const key in list) {
    const val = list[key]
    const name = isArray ? val : key
    res[name] = getters(val)
  }
  return res
}

export const data = getter('data')
export const site = getter('site')
export const current = getter('current')
export const currentList = getter('currentList')
export const next = getter('next')
export const previous = getter('previous')

export default new Vuetal()
