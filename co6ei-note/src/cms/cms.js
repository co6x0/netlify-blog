import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

const config = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      config: {
        backend: {
          branch: 'master'
        },
        collections: [
          {
            name: 'blog',
            folder: 'co6ei-note/src/pages/blog-test'
          }
        ]
      }
    }
  } else if (process.env.NODE_ENV === 'production') {
    return {
      config: {
        backend: {
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
