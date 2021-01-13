# Schweiper - React carusel component

## The carusel is made of two nested layers

The first layer checks the length of the images-prop.
It will render nothing if the prop is of wrong type or empty.
If the prop-array only has one item it will render one image without the carusel.

## The second layer - The the dynamic carusel

If the prop has more items the component will render the carusel.

It renders all images in a vertical row where the wrapping container cuts of the
visibility of the remaining images with overflow.

The active index is used to calculate the position-movement of the carusel.

## Improvements

- Improve the scrolling and dragging
  Use the scroll event to detect if we are about to set a new active image so we can
  have a smooth transition.

- Change to new active image on interval

- For better usability, show how many items there is in the carusel with dots

## Styling

Theme-ui, because I find it faster do write than styled components.
And CSS-in-JS is a lot more fun than pure CSS.

## Side notes

I have not been looking at any other existing carusel-solutions
