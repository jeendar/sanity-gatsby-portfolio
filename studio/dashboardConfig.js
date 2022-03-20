export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6236b8eba45e9d78fb6f0a75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ujuse7wn',
                  apiId: '3a8a3574-5907-45a3-a31d-f091ce11b7c6'
                },
                {
                  buildHookId: '6236b8eb5ccc16772d02986e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6aw3mpfp',
                  apiId: 'd4e7b4bd-ea56-4f6a-bba3-e93652a20ba0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeendar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6aw3mpfp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
