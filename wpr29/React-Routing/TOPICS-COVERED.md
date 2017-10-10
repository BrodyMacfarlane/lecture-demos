## HashRouter (has the pound sign) vs BrowserRouter (configure your server)
- Making sure that your UI is in sync with your URL
- Everything from react router dom needs be be inside of the HashRouter component. 
- The HashRouter component only takes one child element

## Route
- Render UI when the path matches the URL location
- path='/'
- component={ Component }
- render={() => {...}}
- exact --- useful path='/'

## Link
- Navigation
- to='/'
  - should match the path prop in the Route

## Switch
- Loads only one route at a time
- It will match the first one and ignore the rest, ORDER IS IMPORTANT

## Params
- props.match.params.id (or what the property name is)
- path='/path/:id' indicate with colon and then the property name

