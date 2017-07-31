import Vue from 'vue'
import siteinfo from 'siteinfo'
import vuetal from '~/api/vuetal'

function ERROR (err) {
  console.error(err)
  throw Error(err)
}

function sortPages (list) {
  return list.map(v => {
    const dir = v.url.split('/')
    const base = dir.pop()
    const order = v.order === undefined ? 1000 : v.order
    return [v, dir.join('/') || '', order, base]
  }).sort((a, b) => a[1].localeCompare(b[1]) || (a[2] - b[2]) || a[3].localeCompare(b[3]))
  .map(v => v[0])
}

const emptyItem = {
  url: '',
  matter: {},
  empty: true
}

export const state = () => ({
  pages: {},
  data: {},
  lists: {},
  listsByUrl: {},
  pageMap: {},
  currentPage: null,
  currentList: null
})

export const getters = {
  site: state => siteinfo || {},
  data: ({data}) => url => data[url] ? data[url].data || {} : {},
  dataMeta: ({data}) => name => data[name],
  page: ({pages}) => url => pages[url] || emptyItem,

  // Current, next, previous page, list
  currentList: ({currentList, lists}) => currentList ? lists[currentList] : emptyItem,
  current: ({currentPage, pages}) => currentPage ? pages[currentPage] : emptyItem,
  next: state => {
    const loc = state.pageMap[state.currentPage]
    if (loc) return state.lists[loc[0]].data[loc[1] + 1] || emptyItem
    return emptyItem
  },
  previous: state => {
    const loc = state.pageMap[state.currentPage]
    if (loc) return state.lists[loc[0]].data[loc[1] - 1] || emptyItem
    return emptyItem
  }
}

export const mutations = {
  ADD_OR_UPDATE_DATA (state, data) {
    Vue.set(state.data, data.url, data)
  },
  ADD_OR_UPDATE_PAGE (state, page) {
    Vue.set(state.pages, page.url, page)
  },
  ADD_OR_UPDATE_LIST (state, list) {
    Vue.set(state.lists, list.name, list)
    Vue.set(state.listsByUrl, list.url, list.name)
    for (const index in list.data) {
      const url = list.data[index].url
      Vue.set(state.pageMap, url, [list.name, parseInt(index)])
    }
  },
  REMOVE_PAGE (state, url) {
    Vue.delete(state.pages, url)
    Vue.delete(state.pageMap, url)
  },
  REMOVE_LIST (state, name) {
    const url = state.lists[name].url
    Vue.delete(state.lists, name)
    Vue.delete(state.listsByUrl, url)
  },
  SET_CURRENT_PAGE (state, url) {
    state.currentPage = url
  },
  SET_CURRENT_LIST (state, name) {
    state.currentList = name
  }
}

export const actions = {
  /**
   * Fetch api with url. url should include api_point
   */
  async FETCH_API ({state, commit}, [url, type]) {
    const res = await vuetal.fetchApi(url, type).catch(ERROR)
    const data = res.data
    switch (data.type) {
      case 'page':
        commit('ADD_OR_UPDATE_PAGE', data)
        break
      case 'data':
        commit('ADD_OR_UPDATE_DATA', data)
        break
      case 'list':
        if (data.name === 'pages') {
          data.data = sortPages(data.data)
        }
        commit('ADD_OR_UPDATE_LIST', data)
        break
    }
    return res
  },

  async USE_PAGE ({state, dispatch}, url) {
    if (state.pages[url]) return {data: state.pages[url]}
    return await dispatch('FETCH_API', [url, 'page']).catch(ERROR)
  },

  async USE_DATA ({state, dispatch}, url) {
    if (state.data[url]) return {data: state.data[url]}
    return await dispatch('FETCH_API', [url, 'data']).catch(ERROR)
  },

  async USE_LIST ({state, dispatch}, [url, type]) {
    const name = state.listsByUrl[url]
    if (name) return {data: state.lists[name]}
    return await dispatch('FETCH_API', [url, type]).catch(ERROR)
  },

  async USE_COLLECTION ({state, getters, dispatch}, collection) {
    const list = state.lists[collection]
    if (list) return {data: list}
    const _collection = getters.site.collections[collection]
    if (!_collection || !_collection.list) return {data: {}}
    return await dispatch('FETCH_API', [_collection.list, _collection.type])
      .catch(ERROR)
  },

  async USE_PAGE_AS_CURRENT ({state, commit, dispatch}, url) {
    const res = await dispatch('USE_PAGE', url).catch(ERROR)
    const page = res.data
    if (!page || Object.keys(page).length < 1) return res
    commit('SET_CURRENT_PAGE', url)
    // Call "use collection as current" automatically
    dispatch('USE_COLLECTION_AS_CURRENT', page.collection)
      .catch(ERROR)
    return res
  },

  async USE_PAGE_LIST_AS_CURRENT ({state, commit, dispatch}, url) {
    const res = await dispatch('USE_LIST', [url, 'page'])
    const list = res.data
    if (list) commit('SET_CURRENT_LIST', list.name)
    return res
  },

  async USE_COLLECTION_AS_CURRENT ({commit, dispatch}, name) {
    const res = await dispatch('USE_COLLECTION', name)
    const list = res.data
    if (list) commit('SET_CURRENT_LIST', name)
    return res
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
