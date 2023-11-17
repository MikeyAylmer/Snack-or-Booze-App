### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
```React Router is a library for handling navigation in React applications. It provides a way to create single-page applications (SPAs) with dynamic, client-side routing. The primary purpose of React Router is to enable the development of complex, multi-view applications by allowing different components to be rendered based on the URL.``

- What is a single page application?
```A single page application is a react app the renders different routes bu stays on one page.``

- What are some differences between client side and server side routing?
```Client side routing doesnt reload the whole page just the browser, Server side routing is a full reload of the page and renders an entire new HTML page.``

- What are two ways of handling redirects with React Router? When would you use each?
```Use the <Redirect> component when you want to include the redirect logic directly within the component's JSX. This is convenient for straightforward redirects based on conditions within the component.``
``Use the useHistory hook (React Router v5) or useNavigate hook (React Router v6) when you need more control over the redirect process, such as handling redirects in response to user interactions, form submissions, or other programmatic conditions`

- What are two different ways to handle page-not-found user experiences using React Router? ```Handling page-not-found (404) experiences in React Router involves directing users to a dedicated page when they navigate to a route that doesn't exist`

- How do you grab URL parameters from within a component using React Router?
```In React Router, you can grab URL parameters from within a component using the useParams hook. The useParams hook provides access to the parameters in the URL.`

- What is context in React? When would you use it?
```Context is used to pass down functions or props to child components with out using props`

- Describe some differences between class-based components and function
  components in React.
  ```Class-based Components:Have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount Useful for tasks such as data fetching, subscriptions, or manual DOM manipulations.Function Components: Use the useEffect hook to perform side effects. Can replicate the behavior of lifecycle methods using the useEffect hook.`

- What are some of the problems that hooks were designed to solve?
```Hooks enable the extraction and reuse of stateful logic without introducing additional component hierarchies. Custom hooks allow developers to encapsulate and share logic across components easily.`