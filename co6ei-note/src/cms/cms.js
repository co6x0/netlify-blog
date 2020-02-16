import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

const config = () => {
  if (process.env.GATSBY_CMS_BRANCH === 'development') {
    console.log('CMS in development')
    return {
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'master'
        },
        collections: [
          {
            name: 'blog',
            folder: 'co6ei-note/src/pages/blog/test'
          }
        ]
      }
    }
  } else if (process.env.GATSBY_CMS_BRANCH === 'production') {
    console.log('CMS in production')
    return {
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'production'
        },
        collections: [
          {
            name: 'blog',
            folder: 'co6ei-note/src/pages/blog'
          }
        ]
      }
    }
  }
}
CMS.init(config())

// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('blog', BlogPostPreview)
