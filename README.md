# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses to see the key information and location


### Links

- Solution URL: [https://github.com/Soaphub/Ip-address-traker]
- Live Site URL: [https://inspiring-selkie-3e9f7c.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind Css

### What I learned

Function for centering the position of the marker in the screen

```js
function CenterMap({ center }) {
        const map = useMap();
      
        useEffect(() => {
            map.setView(center, map.getZoom());
        }, [center, map]);
      
        return null;
    }
```

### Useful resources

- [https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw] - This helped me for Tailwind Css reason. I really liked this pattern and will use it going forward.
- [https://www.youtube.com/watch?v=jD6813wGdBA&ab_channel=AlejandroAO-Software%26Ai]- This is an amazing article which helped me finally understand leaflet in react.

## Author

- Website - [Ambadi](https://soaphub.github.io/Mysite/)
- Frontend Mentor - [@Soaphub](https://www.frontendmentor.io/profile/Soaphub)


## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.
