import type { CollectionConfig } from '../../../../src/collections/config/types';
import { mediaSlug } from '../Media';


export const postsSlug = 'posts';

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'author',
      hasMany: true,
      required: false,
      admin: {
        position: 'sidebar',
        isSortable: false,
      },
    },
    {
      name: 'associatedMedia',
      type: 'upload',
      relationTo: mediaSlug,
      access: {
        create: () => true,
        update: () => false,
      },
    },
  ],
};
