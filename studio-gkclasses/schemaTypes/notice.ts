const notice = {
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Notice Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Notice Link (Optional)',
      type: 'url',
      description: 'Add a link if you want the notice to be clickable',
    },
    {
      name: 'isNew',
      title: 'Mark as New',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 1,
      validation: (Rule: any) => Rule.min(1).max(10),
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
    },
  ],
  orderings: [
    {
      title: 'Priority, High to Low',
      name: 'priorityDesc',
      by: [{ field: 'priority', direction: 'desc' }],
    },
    {
      title: 'Created At, New to Old',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      isNew: 'isNew',
      isActive: 'isActive',
      link: 'link',
    },
    prepare(selection: any) {
      const { title, description, isNew, isActive, link } = selection;
      return {
        title: title,
        subtitle: `${description?.substring(0, 50)}... ${isNew ? '(NEW)' : ''} ${link ? '(LINKED)' : ''} ${!isActive ? '(INACTIVE)' : ''}`,
      };
    },
  },
};

export default notice; 