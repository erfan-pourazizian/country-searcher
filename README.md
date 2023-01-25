### [Live Site](https://country-searcher-task.vercel.app/)

![desktop-preview](https://user-images.githubusercontent.com/91010211/214712877-90f9e160-1f3f-47fa-a30c-7ae01351c7cb.jpg)

## REST Countries API with color theme switcher coding challenge


### tasks completed
:white_check_mark: See all countries from the API on the homepage <br/>
:white_check_mark: Search for a country using an input field <br/>
:white_check_mark: Filter countries by region <br/>
:white_check_mark: Click on a country to see more detailed information on a separate page (client-side routing) <br/>
:white_check_mark: Clicking on border countries on the detail page should link the user to the detail of those countries <br/>
:white_check_mark: Toggle the color scheme between light and dark mode <br/>
:white_check_mark: Add sort functionality for both Population and Country Name <br/>
:white_check_mark: Make all content server-side rendered <br/>
:white_check_mark: Make sure styles are loaded whenever they're really needed. e.g., The styles for the details page don't load on the homepage <br/>
:white_check_mark: Make sure the ratio for the country flags is 4:3 or any other ratio you find suitable <br/>
:white_check_mark: Add lazy loading for country images <br/>

### folder structure
```
|   .env
|   .eslintrc.json
|   .gitignore
|   jsconfig.json
|   next.config.js
|   output.doc
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   tailwind.config.js
|   
+---public
|       favicon.ico
|       next.svg
|       thirteen.svg
|       vercel.svg
|       
\---src
    +---api
    |       fetchApi.js
    |       
    +---components
    |   |   Header.jsx
    |   |   Layout.jsx
    |   |   
    |   \---homePageComponents
    |           Card.jsx
    |           DropDown.jsx
    |           Main.jsx
    |           
    +---config
    |       RegionHandler.js
    |       
    +---pages
    |   |   index.js
    |   |   _app.js
    |   |   _document.js
    |   |   
    |   \---details
    |           [name].js
    |           
    \---styles
            globals.css

```

### how to Setup ::heavy_check_mark: <br/>
1: ``npm install``<br/>
2: ``npm run dev``
