function grids(breakepoint) {
  if (breakepoint === 'sm') {
    return `@media screen and (max-width: 576px)`
  } else if (breakepoint === 'md') {
    return `@media screen and (max-width: 767px)`
  } else if (breakepoint === 'lg') {
    return `@media screen and (max-width: 992px)`
  } else if (breakepoint === 'xl') {
    return `@media screen and (max-width: 1200px)`
  }
}

export default grids
