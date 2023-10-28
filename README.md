# RS School. React.

## Week 1. React. Components.

1. Task: [link](https://github.com/rolling-scopes-school/tasks/tree/master/react/modules/module01)
2. Screenshot:
   ![screencapture-merry-profiterole-557f2f-netlify-app-2023-10-28-23_19_41](https://github.com/miroslav-zarenkov/rss-react/assets/60261308/1281c578-3251-4c7e-af12-554d86009ae3)
3. Deploy: [link](https://merry-profiterole-557f2f.netlify.app/)
4. Done 28.10.2023 / deadline 30.10.2023
5. Score: 100 / 100

## Cross-check (100 points)

- [x] (+15) Eslint is set up, when lint command is run it doesn't produce any errors (if there are warnings score might be less)
- [x] (+15) Prettier is set up, format:fix command fixes issues
- [x] (+10) Husky is set up, linting is run on pre-commit
- [x] (+20) Page is split into 2 sections, top one has Search input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api)
- [x] (+15) When user types something to the Search input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term
- [x] (+15) The search term typed into the Search input is saved in the local storage when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term)
- [x] (+10) Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error
