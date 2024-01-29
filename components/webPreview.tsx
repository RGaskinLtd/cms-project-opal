import {EarthGlobeIcon, EditIcon} from '@sanity/icons'
import Iframe from 'sanity-plugin-iframe-pane'

function resolveProductionUrl(document: { slug: { current: string } }) {
  const url = 'http://localhost:3000/'
  const slug = document.slug.current === '/' ? '' : document.slug.current
  const query = document.slug.current === '/' ? '?preview=true' : '/?preview=true'
  return url + slug + query
}

export const getDefaultDocumentNode = (S, {schemaType}: {schemaType: string}) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === 'page' || schemaType === 'newsPage') {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view.component(Iframe)
        .options({
          defaultSize: 'desktop',
          url: (doc: any) => resolveProductionUrl(doc),
          reload: {
            button: true
          }
        })
        .icon(EarthGlobeIcon)
        .title('Web Preview'),
    ])
  }
  return null
}
