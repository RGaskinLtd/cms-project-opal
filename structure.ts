import {ListBuilder, StructureBuilder} from 'sanity/desk'
import {HiOutlineCog} from 'react-icons/hi'
import {SlPeople} from 'react-icons/sl'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {ConfigContext} from 'sanity'

export const myStructure = (S:StructureBuilder, context: ConfigContext): ListBuilder => {
  const isAdmin = S.context.currentUser?.roles.some((role) => role.name === 'administrator')
  const isEditor = S.context.currentUser?.roles.some((role) => role.name === 'editor')
  // const isViewer = S.context.currentUser?.roles.some(role => role.name === 'viewer')

  const settings = isAdmin ? S.listItem()
    .title('Settings')
    .icon(HiOutlineCog)
    .id('settings')
    .child(
      // Instead of rendering a list of documents, we render a single
      // document, specifying the `documentId` manually to ensure
      // that we're editing the single instance of the document
      S.document()
        .schemaType('settings')
        .documentId('settings')
    ) : null
  const pages = isAdmin ? S.documentTypeListItem('page').title('Pages') : null
  const newsPages = isAdmin || isEditor ? S.documentTypeListItem('newsPage').title('News') : null
  const people = isAdmin ? orderableDocumentListDeskItem({type: 'people', icon: SlPeople, title: 'Team', S, context}) : null
  const sections = isAdmin ? S.documentTypeListItem('section').title('Reusable Sections') : null
  const divider = S.divider()

  const itemsToShow = []
  if (settings) {
    itemsToShow.push(settings, divider)
  }
  if (pages) {
    itemsToShow.push(pages)
  }
  if (newsPages) {
    itemsToShow.push(newsPages)
  }
  if (people) {
    itemsToShow.push(people)
  }
  if (sections) {
    itemsToShow.push(sections)
  }
  return S.list()
    .title('Content')
    .items([...itemsToShow])
}
