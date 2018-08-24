export const imports = {
  'components/Action.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-action" */ 'components/Action.mdx'),
}
