# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: I really don't know the purpose of super()

  Researched answer: super keyword can be used to call overridden methods, access hidden fields or invoke a superclass's constructor



2. What is a virtual DOM?

  Your answer: Document Object model - Idk what it means but I know what it stands for

  Researched answer: Document Object Model - it's an interface that takes our URL and changes the document



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: You need an opening of a class (class app extends component ), you need render, you need return statement, you need an h1 tag, and then you need to export default app

  Researched answer: const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));



4. What is JSX?

  Your answer: jsx is what the javascript language that is used within react

  Researched answer: JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.



5. What is state in React?

  Your answer: a house for pieces of code

  Researched answer: React is a JavaScript library for building user interfaces.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: when other languages are wrapped within javascript?...

  Researched answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

Examples being - mounting, updating, unmounting, error handling, other APIs etc.

- API - An API is basically a set of data, often in JSON format with specified endpoints. When we access data from an API, we want to access specific endpoints within that API framework.

- event.preventDefault() - React uses synthetic events to handle events from button, input and form elements. A synthetic event is a shell around the native DOM event with additional information for React. ... In this case, a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.

- DOM events - Your event handlers will be passed instances of SyntheticEvent , a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault() , except the events work identically across all browsers.

- http verbs - The Hypertext Transfer Protocol is an application protocol for distributed, collaborative, hypermedia information systems.

Examples - POST, GET, PUT, PATCH, and DELETE

- MVC - Model–view–controller is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.
