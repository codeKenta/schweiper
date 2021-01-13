/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'

import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import Carusel from '../Carusel'

const images = [
  { path: image1, alt: 'Balcony' },
  { path: image2, alt: 'Living room' },
  { path: image3, alt: 'Apartment from outside' },
  { path: image4, alt: 'Bathroom' },
  { path: image5, alt: 'Bedroom' },
]

const Page = () => {
  return (
    <div
      sx={{
        maxWidth: '1200px',
        padding: '20px',
        background: 'white',
        margin: '0 auto',
      }}
    >
      <div sx={{ maxWidth: '500px', height: '300px', margin: '0 auto' }}>
        <Carusel images={images} />
      </div>
    </div>
  )
}

export default Page
