# Builder.abc 👨‍💻

Multi-step form wizard where that collects various pieces of information in order to build a character.

## View live website

https://builderabc.netlify.app/

### `Comments`
<p>For frontend development I used ReactJs then for styling is TailwindCSS</p>

### `External Packages`
<p>These are packages I have used</p>

#### React Icons
<b>npm install react-icons --save </b>
<p>I have added this icon on the form, the icon represents 'go to previous/go back' incase you want to edit a mistake</p>

#### React Router
<b>npm i react-router-dom</b>
<p>I have created 3 pages</p>
<p>Home - https://builderabc.netlify.app/<p>
<p>Form - https://builderabc.netlify.app/builder</p>
<p> Page not found - https://builderabc.netlify.app/builderssss</p>
<p>React router helps with navigation in the site</p>

#### React Hook Form
<b>npm install react-hook-form</b>
<p>I have used React hook form a lot on form page for:</p>
<p>Validation, creating/keeping data so that I can be able to use it for the last part of the form. </p>

#### React Select
<b>npm i react-select</b>
<p>I have used React Select for the occupation dropdown</p>

### `Hosting`
<p>For hosting I have used Netlify</p>
<p>Hosting on netlify used give me issues a lot. Navigating to other pages used to cause the website to crash </p>
<p>Adding the netlify.toml file helps fixing those kinda issues. </p>


#### `Challenges I have faced in this project`
<p>I struggled creating the color picker part of the form. I tried looking external packages but I struggled to intergrate them.</p>
<p>What I did was create the colours as radio, then added some CSS.</p>
<p>To add more colours I can just go to src/data/colorsdata.js then add more colors<p>
<p>Another issues was validating if the user is 19 years or older.

