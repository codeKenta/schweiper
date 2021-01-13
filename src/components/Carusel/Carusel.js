/** @jsxRuntime classic */
/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'

import DynamicCarusel from './DynamicCarusel'

const Carusel = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null
  }

  if (images.length === 1) {
    let { path, alt } = images[0]
    return path ? (
      <img
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        alt={alt}
        src={path}
      />
    ) : null
  }

  return <DynamicCarusel images={images} />
}

Carusel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Carusel
