export default {
    name: 'galleryItem',
    title: 'Gallery Item',
    type: 'document',
    fields: [
      {
        name: 'index',
        index : 'index',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  }
  