import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import { getDefaultDocumentNode } from './webPreview'
import { schemaTypes } from './schemas'
import { colorInput } from '@sanity/color-input'

import { HiOutlineCog } from 'react-icons/hi'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["settings"])

export default defineConfig({
  name: 'default',
  title: 'Project Opal',

  projectId: 'd3b5ou77',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Settings")
              .icon(HiOutlineCog)
              .id("settings")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("settings")
                  .documentId("settings")
              ),

            // Regular document types
            S.documentTypeListItem("page").title("Pages"),
            // S.documentTypeListItem("pageGroups").title("Page Groups"),
          ]),
      defaultDocumentNode: getDefaultDocumentNode
    }),
    visionTool(),
    colorInput(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
