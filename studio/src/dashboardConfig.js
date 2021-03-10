export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604956f01df05a2a5bab10d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zc1cpwv8',
                  apiId: '9402458c-3265-4775-9a0d-733c3210a61c'
                },
                {
                  buildHookId: '604956f01fa726275e59ec33',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rrmm7dw6',
                  apiId: '64ed7d5f-42ac-401b-ad62-fe5f30bb1df1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaxSamnani/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rrmm7dw6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
