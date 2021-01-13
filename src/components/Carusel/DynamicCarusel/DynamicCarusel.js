/** @jsxRuntime classic */
/** @jsx jsx */

import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { jsx } from 'theme-ui'

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const buttonStyle = {
  background: 'none',
  position: 'absolute',
  top: 'calc(50% - 20px)',
  border: 'none',
  transition: 'color 200ms ease-in',
  color: 'rgba(100.6, 100.6, 100, 0.7)',
  fontSize: '40px',
  '&:hover': {
    cursor: 'pointer',
    color: 'rgba(100.6, 100.6, 100, 0.5)',
  },
  '&:active': {
    color: 'rgba(100.6, 100.6, 100, 0.2)',
  },
}

const DynamicCarusel = ({ images }) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [active, setActive] = useState(0)

  const [
    hiddenImagesWrapperPosition,
    setHiddenImagesWrapperPosition,
  ] = useState(null)

  const wrapperElementRef = useRef()

  useEffect(() => {
    setWrapperWidth(wrapperElementRef.current.offsetWidth)

    function handleResize() {
      setWrapperWidth(wrapperElementRef.current.offsetWidth)
      //   setHiddenImagesWrapperPosition(
      //     `-${wrapperElementRef.current.offsetWidth * active}px`
      //   )
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setHiddenImagesWrapperPosition(`-${wrapperWidth * active}px`)
  }, [active, wrapperWidth])

  function movetoNext() {
    setActive(active === images.length - 1 ? 0 : active + 1)
  }

  function moveToPrevious() {
    setActive(active === 0 ? images.length - 1 : active - 1)
  }

  return (
    <div
      ref={wrapperElementRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: 'inherit',
        overflowY: 'hidden',
      }}
    >
      <div
        sx={{
          display: 'flex',
          transition: 'transform 1000ms ease-in',
          transform: `translateX(${hiddenImagesWrapperPosition})`,
        }}
      >
        {images.map(({ path, alt }) => (
          <img
            key={path}
            alt={alt}
            src={path}
            sx={{
              width: `${wrapperWidth}px`,
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        ))}
      </div>

      <button
        sx={{
          ...buttonStyle,
          position: 'absolute',
          left: 0,
        }}
        onClick={moveToPrevious}
      >
        <FaChevronCircleLeft />
      </button>
      <button
        sx={{
          ...buttonStyle,
          right: 0,
        }}
        onClick={movetoNext}
      >
        <FaChevronCircleRight />
      </button>
    </div>
  )
}

DynamicCarusel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default DynamicCarusel
