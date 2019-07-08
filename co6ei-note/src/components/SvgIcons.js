import React from 'react'
// import { css } from '@emotion/core'

// import styles from './styles'

//import SVG images
import CategoryDesign from '../images/svg/category-design.svg'
import CategoryDevelopment from '../images/svg/category-development.svg'
import CategoryMusic from '../images/svg/category-music.svg'
import CategoryOther from '../images/svg/category-other.svg'

export default ({ name }) => {
  function exportSvg(name) {
    if (name === 'categoryDesign') {
      return <CategoryDesign />
    } else if (name === 'categoryDevelopment') {
      return <CategoryDevelopment />
    } else if (name === 'categoryMusic') {
      return <CategoryMusic />
    } else if (name === 'categoryOther') {
      return <CategoryOther />
    }
  }

  return <div className="svg-icon">{exportSvg(name)}</div>
}
