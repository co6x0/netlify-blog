import CMS, { init } from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

if (!process.env.NETLIFY) {
  const config = {
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        folder: 'co6ei-note/src/pages/blog/test'
      }
    ]
  }
  init({ config })
}

// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('blog', BlogPostPreview)
