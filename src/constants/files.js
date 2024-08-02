export const FILES = [
  {
    name: 'Project',
    files: [
      {
        name: 'Components',
        files: [
          {
            name: 'UI',
            files: [
              {
                name: 'Button',
                files: [{ name: 'primary.js' }, { name: 'secondary.js' }],
              },
              { name: 'Input', files: [{ name: 'index.js' }] },
            ],
          },
          {
            name: 'Widgets',
            files: [{ name: 'Auth', files: [{ name: 'index.js' }] }],
          },
          {
            name: 'Layout',
            files: [{ name: 'Main', files: [{ name: 'index.js' }] }],
          },
        ],
      },
      {
        name: 'Hooks',
        files: [
          { name: 'index.js' },
          { name: 'Web3', files: [{ name: 'useContract.js' }] },
        ],
      },
      { name: 'Store', files: [] },
      {
        name: 'Services',
        files: [],
      },
      { name: 'config.js' },
    ],
  },
]
