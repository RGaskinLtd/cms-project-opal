import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {getDefaultDocumentNode} from './components/webPreview'
import {schemaTypes} from './schemas'
import {myStructure} from './structure'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {workflow} from 'sanity-plugin-workflow'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['settings'])

export default defineConfig({
  name: 'default',
  title: 'Project Opal',
  projectId: 'd3b5ou77',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      defaultDocumentNode: getDefaultDocumentNode
    }),
    workflow({
      schemaTypes: ['newsPage', 'page'],
      states: [
        {
          // Required configuration
          id: 'draft',
          title: 'Draft',
          // Optional settings:
          // Used for the color of the Document Badge
          color: 'primary',
          // Will limit document actions and drag-and-drop for only users with these Role
          roles: ['editor', 'administrator'],
          // Requires the user to be "assigned" in order to update to this State
          requireAssignment: true,
          // Requires the document to be valid before being promoted out of this State
          // Warning: With many documents in the Kanban view this can negatively impact performance
          requireValidation: true,
          // Defines which States a document can be moved to from this one
          transitions: ['inReview']
        },
        {
          // Required configuration
          id: 'inReview',
          title: 'In Review',
          // Optional settings:
          // Used for the color of the Document Badge
          color: 'success',
          // Will limit document actions and drag-and-drop for only users with these Role
          roles: ['editor', 'administrator'],
          // Requires the user to be "assigned" in order to update to this State
          requireAssignment: true,
          // Requires the document to be valid before being promoted out of this State
          // Warning: With many documents in the Kanban view this can negatively impact performance
          requireValidation: true,
          // Defines which States a document can be moved to from this one
          transitions: ['changesRequested', 'approved']
        },
        {
          // Required configuration
          id: 'approved',
          title: 'Approved',
          // Optional settings:
          // Used for the color of the Document Badge
          color: 'success',
          // Will limit document actions and drag-and-drop for only users with these Role
          roles: ['administrator'],
          // Requires the user to be "assigned" in order to update to this State
          requireAssignment: true,
          // Requires the document to be valid before being promoted out of this State
          // Warning: With many documents in the Kanban view this can negatively impact performance
          requireValidation: true,
          // Defines which States a document can be moved to from this one
          transitions: ['changesRequested', 'inReview', 'published']
        },
        {
          // Required configuration
          id: 'changesRequested',
          title: 'Changes Requested',
          // Optional settings:
          // Used for the color of the Document Badge
          color: 'warning',
          // Will limit document actions and drag-and-drop for only users with these Role
          roles: ['editor', 'administrator'],
          // Requires the user to be "assigned" in order to update to this State
          requireAssignment: true,
          // Requires the document to be valid before being promoted out of this State
          // Warning: With many documents in the Kanban view this can negatively impact performance
          requireValidation: true,
          // Defines which States a document can be moved to from this one
          transitions: ['inReview']
        },
        {
          // Required configuration
          id: 'published',
          title: 'Published',
          // Optional settings:
          // Used for the color of the Document Badge
          color: 'success',
          // Will limit document actions and drag-and-drop for only users with these Role
          roles: ['administrator'],
          // Requires the user to be "assigned" in order to update to this State
          requireAssignment: true,
          // Requires the document to be valid before being promoted out of this State
          // Warning: With many documents in the Kanban view this can negatively impact performance
          requireValidation: true,
          // Defines which States a document can be moved to from this one
          transitions: []
        },
      ]
    }),
    media(),
    visionTool(),
    colorInput(),
    simplerColorInput(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) => {
      const actions = input.filter((item) => item.action)
      const workflowActions = input.filter((item) => !item.action)
      const isAdmin = context.currentUser?.roles.some((role) => role.name === 'administrator')
      if (singletonTypes.has(context.schemaType)) { // singleton actions
        return input.filter(({action}) => action && singletonActions.has(action))
      }
      if (isAdmin) {
        return [...actions, ...workflowActions] // admin actions
      }
      return input.filter((item) => !item.action) // non admin user actions
    },
  },
})
