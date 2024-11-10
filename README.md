# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### About Index.js File

App Component should be delivered to the Html page through index.js file. First we have to get the Root element of html into index file and then the app component has to be kept in Render function to render, App Component on Website.

### About App.js File

To Wrap all the components of the application in a single file and giving it Single Page features by wrapping all them in Routes,Route components of React Router Dom. it is very essential to put all the components at one file for Developer Readebilities and to support some functionalities of React Router Dom

### About AppComp.js File

The Base of the application lies here, i.e, the Input field and Search button and meals,based on Users input and Error messages etc all are displayed through this page only.Each item is Styled through css and given Functionlaities to move to Meal page when Clicked usinng React Router Dom functionalities. Loading animation and Error messages are displayed as user friendly, which enhances User Experience.

### About MealList.js File

MealList Component is the component, which is responsible for the displaying of all the meals on UI.It is designed in such a way that gives responsiveness to the website. It is the one which adds website, a meaning and repeated site visits. It provides the users what they want by displaying the meals available according to the users input.

### About MealCard.js File

To Diplay each Meal in Meals array in an Oragnised manner, MealCard component helps us.The proper framing and showing the image and text can be done by this component. while Hovering the meals it can add Special effects, which Enhances User Experience.

### About Meal.js File
 
To view the Meal image and its Name, when the user clicked on it, we require one Webpage. Meal Component is designed in such a way that it gets Dynamic Routes. Dynamic routes are achieved by using the React Router Rom's useParams hook.we can get the meal that is clicked using its id from the Meals Array.

### About Contextapi.js File

To manage the State Globally (to access it in various files) we have to make it Global by using useContext Hook in React. In this application, we created one Context and Context Provider by passing the State, which can be accessed Globally, All the App Component should be wrapped in this contextProvider to make the state, that we have passed, Available Globally.

### About Loading.js File

Creating the Loading Animation, at the time of Fetching the API.It is essential ,so that user can never get bored by seeing the Loading Animation.otherwise he feels Bored (or) sometimes in a Dilemma like whether website is working or not, which decreases User Experience and results in decreased Site Visits.

### About App.css File

To add Styling for various elements/tags in html and making the website user friendly by providing proper user experience, which can be achieved in both Large screens like Laptops and Small screens like Mobile phones, through Responsive Design.

### About Axios

Axios is a Third party module, which is used in Dealing with APIs'. It has to be installed first, to make Avail in our application.

### About React ROuter Dom

It is an Essential module to make our application more attractive and user friendly. It can provide Routing features. which enables users to navigate from one page to another page Without Refreshing the Website. It contains various hooks like useParams, useNavigate and Links etc which have more advanced features, when compares to Html and React.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

