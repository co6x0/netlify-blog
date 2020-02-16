import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

if (process.env.NODE_ENV === 'development') {
  console.log('aaaaaaaaaaaa')
  const config = {
    backend: {
      name: 'git-gateway',
      branch: 'master'
    },
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        folder: 'co6ei-note/src/pages/blog/test'
      }
    ]
  }
  CMS.init({ config })
}

// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('blog', BlogPostPreview)
