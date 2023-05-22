import type { CollectionConfig } from '../../../../src/collections/config/types';

export const AuthorsCollection: CollectionConfig = {
  slug: 'author',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
};
