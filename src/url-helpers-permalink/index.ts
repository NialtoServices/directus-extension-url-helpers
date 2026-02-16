import { defineInterface } from '@directus/extensions-sdk'
import PermalinkInterface from './components/PermalinkInterface.vue'

export default defineInterface({
  id: 'url-helpers-permalink',
  name: 'Permalink',
  description: 'Enter a permalink (can auto-generate from other fields)',
  icon: 'link',
  group: 'standard',
  types: ['string', 'text'],
  component: PermalinkInterface as any,
  options: ({ collection }) => {
    return [
      {
        field: 'source',
        type: 'string',
        name: '$t:source',
        meta: {
          required: true,
          interface: 'system-display-template',
          width: 'full',
          options: {
            collectionName: collection,
            placeholder: '$t:fill_template',
            font: 'monospace'
          }
        }
      },
      {
        field: 'prefix',
        type: 'string',
        name: '$t:prefix',
        meta: {
          interface: 'system-display-template',
          width: 'full',
          options: {
            collectionName: collection,
            placeholder: '/',
            font: 'monospace'
          }
        }
      },
      {
        field: 'suffix',
        type: 'string',
        name: '$t:suffix',
        meta: {
          interface: 'system-display-template',
          width: 'full',
          options: {
            collectionName: collection,
            placeholder: '/',
            font: 'monospace'
          }
        }
      },
      {
        field: 'iconLeft',
        type: 'string',
        name: '$t:icon_left',
        meta: {
          interface: 'select-icon',
          width: 'half'
        }
      },
      {
        field: 'autoGenerate',
        type: 'json',
        name: '$t:auto_generate',
        meta: {
          interface: 'select-multiple-checkbox',
          width: 'full',
          options: {
            choices: [
              { text: '$t:on_create', value: 'create' },
              { text: '$t:on_update', value: 'update' }
            ]
          }
        },
        schema: {
          default_value: ['create']
        }
      }
    ]
  }
})
