export default async function ({error, store, route}) {
  const res = await store.dispatch('vuetal/USE_PAGE_LIST_AS_CURRENT', route.path)
    .catch(console.error)
  if (res.status === 404) {
    error({
      statusCode: 404,
      message: `The page doesn't exists`
    })
  }
}
// TODO if (res.status === 301 || res.status === 302)
