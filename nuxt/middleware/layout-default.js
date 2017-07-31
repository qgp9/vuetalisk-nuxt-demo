export default async function ({store}) {
  await store.dispatch('vuetal/USE_DATA', '/data/menu')
    .catch(err => { throw Error(err) })
}
