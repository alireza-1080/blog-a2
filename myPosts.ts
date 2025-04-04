type Author = {
  username: string
  role: string
  image: string
  id: string
}

type Post = {
  id: string
  title: string
  content: string
  image: string
  imagePath: string
  authorId: string
  createdAt: string
  updatedAt: string
  author: Author
}

const posts: Post[] = [
  {
    id: '67efb768d7fe106c83ce351f',
    title: 'What is BlogA2?',
    content: `I created BlogA2 as a practice website, utilizing the technologies and skills I’ve mastered, to serve as both a portfolio piece and a sample of my work. This project was designed to showcase my abilities in web development while keeping things simple yet functional.

BlogA2 is equipped with a backend system that allows it to store the data you input. Once you log into your account, you can access the articles you’ve published from any device—be it a mobile phone, computer, or anything else. This cross-device accessibility ensures a seamless user experience.

That said, there’s a catch. Since there are always individuals out there who might misuse or disrupt such platforms, and I didn’t want to invest time in moderating user-generated content, the articles you publish won’t be publicly visible. Instead, they’re stored privately in your personal user panel. This setup lets you see how the frontend and backend of the website work together without exposing your content to everyone.

The only articles available to the public are the ones I publish myself. These focus on the programming technologies I use, offering insights into the tools and techniques behind BlogA2. It’s a way to share knowledge while keeping the project’s scope manageable.

I’m fully aware that I could’ve added a ton of extra features to this website—think advanced editing tools, social sharing options, or even a comment section. But I deliberately kept it minimal. My goal wasn’t to build a full-fledged platform but to create a quick preview of what a simple article-publishing website could look like. BlogA2 is a proof of concept, a snapshot of my skills, and a stepping stone for bigger things.`,
    image: 'articlesImages/bloga2.png',
    imagePath: '/articlesImages/bloga2.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T10:41:44.186+00:00',
    updatedAt: '2025-04-04T10:41:44.186+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
  {
    id: '67efb768d7fe106c83ce351g',
    title: 'MERN Stack',
    content: `The MERN stack is a popular set of technologies used to build modern, full-stack web applications. It’s an acronym that stands for MongoDB, Express.js, React, and Node.js. Together, these four tools create a powerful, JavaScript-based ecosystem that allows developers like me to craft dynamic and efficient websites from front to back—all while sticking to a single programming language.

Breaking It Down
MongoDB: A NoSQL database that stores data in a flexible, JSON-like format. It’s perfect for handling large amounts of unstructured data and scales easily as a project grows.
Express.js: A lightweight web framework for Node.js that simplifies building the backend. It handles things like routing and API creation with minimal fuss.
React: A JavaScript library for building interactive user interfaces. It’s fast, component-based, and makes the frontend development process a breeze.
Node.js: A runtime that lets JavaScript run on the server side. It’s the glue that ties the whole stack together, enabling seamless communication between the frontend and backend.
Why I Chose the MERN Stack
I decided to use the MERN stack for BlogA2 (and other projects) for a few key reasons:

JavaScript Everywhere: With MERN, I can write both the frontend and backend in JavaScript. This reduces the mental overhead of switching between languages and keeps my workflow smooth.
Efficiency: The stack’s components are designed to work well together. For example, data flows effortlessly from MongoDB through Express.js and Node.js to React, making development faster and more cohesive.
Community and Resources: MERN is widely adopted, which means there’s a huge community of developers, plenty of tutorials, and a wealth of libraries to lean on when I need help or inspiration.
Scalability: While BlogA2 is a small project, the MERN stack is robust enough to handle larger, more complex applications if I decide to expand later.
Learning and Portfolio Value: Working with MERN lets me sharpen my skills in a modern, in-demand tech stack. It’s a great addition to my portfolio, showing potential clients or employers that I can handle full-stack development.
Why It Fits BlogA2
For a project like BlogA2, where I wanted a simple yet functional site to showcase my abilities, MERN was a natural fit. It allowed me to quickly set up a backend to store user data (like articles), build a responsive frontend for viewing them, and tie it all together without overcomplicating things. I didn’t need a massive feature set—just a clean, working example of what I can do—and MERN delivered exactly that.

In short, the MERN stack is my go-to because it’s versatile, efficient, and lets me focus on building rather than wrestling with tools. Whether it’s a practice site like BlogA2 or something bigger down the road, it’s a stack I’ll keep coming back to.`,
    image: 'articlesImages/Mern.png',
    imagePath: 'articlesImages/Mern.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T12:43:15.803+00:00',
    updatedAt: '2025-04-04T12:43:15.803+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
  {
    id: '67efb768d7fe106c83ce351h',
    title: 'MongoDB',
    content: `MongoDB is a leading NoSQL database that I’ve chosen to use in BlogA2, and for good reason. Unlike traditional relational databases that store data in rigid tables with rows and columns, MongoDB takes a more flexible approach. It’s document-oriented, meaning it stores data in JSON-like structures called BSON (Binary JSON). This makes it a perfect fit for modern web applications like mine.

What Is MongoDB?
At its core, MongoDB is designed to handle unstructured or semi-structured data with ease. Instead of predefined schemas, it lets you store "documents" in collections—think of these as dynamic, self-contained records that can vary in structure. For example, one document might hold a user’s name and email, while another could include additional fields like article titles or timestamps, all without breaking a sweat.

It’s also highly scalable. Whether you’re running a small project like BlogA2 or a massive app with millions of users, MongoDB can grow with you, thanks to its ability to distribute data across servers.

Why I’m Using MongoDB in BlogA2
I picked MongoDB for BlogA2 because it aligns perfectly with what I needed for this practice project:

Flexibility: Since BlogA2 is a simple article-publishing site, I wanted a database that could store user data—like account details and articles—without forcing me to define a strict structure upfront. MongoDB’s schema-less design gave me the freedom to experiment and adapt as I built.
JavaScript Compatibility: As part of the MERN stack (MongoDB, Express.js, React, Node.js), MongoDB plays nicely with JavaScript. The data I store in MongoDB flows seamlessly into my Node.js backend and React frontend, keeping everything consistent and easy to manage.
Speed: For a small project like this, MongoDB’s performance is more than enough. It handles queries quickly, letting me retrieve and display articles in a snap when a user logs in.
Ease of Use: Setting up MongoDB is straightforward, and its documentation is top-notch. For a solo developer like me, that means less time figuring out the database and more time coding the fun stuff.
Learning Opportunity: Working with MongoDB helps me build my skills in a widely-used, industry-standard tool. It’s a valuable addition to my portfolio and a technology I can carry into future projects.
How It Works in BlogA2
In BlogA2, MongoDB quietly does the heavy lifting behind the scenes. When you create an account or publish an article, that data gets stored as a document in a MongoDB collection. When you log in from any device, the backend pulls your articles from MongoDB and serves them up to your personal panel. It’s simple, reliable, and gets the job done without overcomplicating things.

Why Not Something Else?
Sure, I could’ve gone with a relational database like MySQL or PostgreSQL, but those are better suited for projects with highly structured data and complex relationships. BlogA2 didn’t need that level of rigidity—MongoDB’s flexibility and simplicity made it the smarter choice for a lightweight site like this.

In short, MongoDB is the backbone of BlogA2’s data storage. It’s fast, flexible, and fits perfectly into the MERN stack I’m using. For a practice project meant to showcase my skills, it’s exactly what I needed.`,
    image: 'articlesImages/MongoDB.png',
    imagePath: 'articlesImages/MongoDB.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T12:43:15.803+00:00',
    updatedAt: '2025-04-04T12:43:15.803+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
  {
    id: '67efb768d7fe106c83ce351i',
    title: 'Express.js',
    content: `Express.js is a minimalist web framework for Node.js, and it’s one of the key technologies I’ve used to build the backend of BlogA2. Known for its simplicity and flexibility, Express.js makes it easy to create robust server-side applications and APIs, which is exactly what I needed for this practice project.

What Is Express.js?
Express.js is essentially a layer on top of Node.js that simplifies the process of building web servers. Node.js, by itself, gives you the raw power to run JavaScript on the server, but it can feel a bit low-level for tasks like handling HTTP requests or setting up routes. That’s where Express.js comes in—it provides a clean, intuitive way to manage those tasks without bogging you down in boilerplate code.

With Express.js, you can define routes (like /login or /articles), handle requests (GET, POST, etc.), and send responses—all in just a few lines of code. It’s lightweight but extensible, meaning you can add middleware or plugins to tailor it to your needs.

Why I’m Using Express.js in BlogA2
I chose Express.js for BlogA2 because it strikes the perfect balance between simplicity and functionality. Here’s why it made sense for this project:

Quick Setup: For a practice site like BlogA2, I didn’t want to spend ages configuring the backend. Express.js let me get a server up and running fast, so I could focus on building features like user authentication and article storage.
MERN Stack Integration: As part of the MERN stack (MongoDB, Express.js, React, Node.js), it fits seamlessly with the other tools I’m using. It acts as the middleman, connecting MongoDB’s data to the React frontend with ease.
Routing Made Easy: BlogA2 needed basic routes—like one to fetch a user’s articles or save a new post. Express.js handles this with a simple syntax, keeping my code clean and organized.
Middleware Power: Express.js supports middleware, which lets me add functionality like logging or error handling. For BlogA2, I kept it minimal, but the option’s there if I want to expand later.
Community Support: Express.js is hugely popular, with a massive ecosystem of resources and libraries. That’s a big plus for a solo developer like me—it means help is always a quick search away.
How It Works in BlogA2
In BlogA2, Express.js is the engine driving the backend. When you log in, it handles the request, talks to MongoDB to verify your credentials, and sends back the data your React frontend needs. When you publish an article, Express.js takes that input, saves it to the database, and confirms it’s done—all behind the scenes. It’s the glue that keeps the app responsive and functional.

For example, a typical route in BlogA2 might look like this (in simplified terms):

A user sends a request to /articles.
Express.js catches it, queries MongoDB for that user’s articles, and sends them back as a JSON response.
The React frontend takes that data and displays it in your panel.
Why Not Something Else?
There are other frameworks out there—like Koa or NestJS—but Express.js won out for BlogA2 because of its simplicity and widespread use. It’s not overkill for a small project, and it’s a skill that’s highly transferable to bigger ones. Plus, it’s the go-to choice for MERN stack development, which aligns with my goals.

In short, Express.js is the unsung hero of BlogA2’s backend. It’s fast to set up, easy to use, and gets the job done without unnecessary complexity. For a practice site meant to showcase my skills, it’s been a perfect fit.`,
    image: 'articlesImages/Expressjs.png',
    imagePath: 'articlesImages/Expressjs.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T12:43:15.803+00:00',
    updatedAt: '2025-04-04T12:43:15.803+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
  {
    id: '67efb768d7fe106c83ce351j',
    title: 'React.js',
    content: `React.js is a powerful JavaScript library that I’ve used to build the frontend of BlogA2. Developed by Facebook, it’s all about creating fast, interactive user interfaces with a component-based approach. For a practice project like BlogA2, React.js was the ideal choice to bring the site to life on the client side.

What Is React.js?
React.js is designed to make building UIs easier and more efficient. It lets you break down your interface into reusable "components"—self-contained pieces of code that manage their own logic and appearance. For example, in BlogA2, I might have a Navbar component for navigation, an ArticleList component to display posts, and a LoginForm component for user authentication.

What sets React apart is its virtual DOM (Document Object Model). Instead of directly updating the browser’s DOM every time something changes—which can be slow—React creates a lightweight copy, figures out what’s different, and updates only what’s necessary. The result? A snappy, responsive experience for users.

Why I’m Using React.js in BlogA2
I picked React.js for BlogA2 because it’s a perfect match for what I wanted to achieve. Here’s why:

Component Reusability: BlogA2 has a simple layout—things like a user panel, article previews, and a form to publish posts. React’s component system let me build these once and reuse them wherever needed, saving time and keeping the code DRY (Don’t Repeat Yourself).
MERN Stack Harmony: As part of the MERN stack (MongoDB, Express.js, React, Node.js), React integrates smoothly with my backend. It fetches data from Express.js APIs and displays it dynamically, making the app feel cohesive.
Speed and Performance: Even for a small site like BlogA2, I wanted the frontend to feel fast. React’s virtual DOM ensures that updates—like showing a new article—happen quickly without reloading the page.
Developer Experience: React’s ecosystem is packed with tools like hooks and state management, which make coding intuitive. For BlogA2, I kept it simple with basic state handling, but the flexibility is there if I want to scale up.
Industry Relevance: React is one of the most popular frontend libraries out there, used by companies big and small. Working with it on BlogA2 sharpens my skills and adds a valuable piece to my portfolio.
How It Works in BlogA2
In BlogA2, React.js powers everything you see. When you log in, a React component sends a request to the Express.js backend, grabs your articles from MongoDB, and renders them in your personal panel. When you publish a new article, another component handles the form input, sends it to the server, and updates the screen—all without a full page refresh.

For example:

The ArticleList component fetches your articles when you log in and displays them in a clean list.
The PublishButton component triggers a POST request to save your new post, then refreshes the list automatically.
It’s all about keeping the experience smooth and interactive, even for a simple site.

Why Not Something Else?
There are other options like Vue.js or Angular, but React won out for BlogA2. Vue is great but less dominant in the job market, while Angular feels heavier than I needed for a lightweight project. React strikes the right balance—powerful yet approachable, and perfectly suited for the MERN stack.

In short, React.js is the beating heart of BlogA2’s frontend. It’s fast, flexible, and lets me build a clean, functional interface with minimal effort. For a practice site meant to showcase my skills, it’s been a game-changer.`,
    image: 'articlesImages/Reactjs.png',
    imagePath: 'articlesImages/Reactjs.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T12:43:15.803+00:00',
    updatedAt: '2025-04-04T12:43:15.803+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
  {
    id: '67efb768d7fe106c83ce351k',
    title: 'Node.js',
    content: `Here’s an English article about Node.js, written for your website based on your request:

Node.js: The Engine Behind BlogA2
Node.js is a JavaScript runtime that I’ve used to power the server-side logic of BlogA2. Built on Chrome’s V8 JavaScript engine, it allows developers to run JavaScript outside the browser—on the server—which makes it a cornerstone of modern web development. For BlogA2, Node.js ties everything together, and here’s why I chose it.

What Is Node.js?
Node.js is all about bringing JavaScript to the backend. Traditionally, JavaScript was confined to the client side—think interactive buttons or form validation in your browser. Node.js changes that by letting you write server-side code in JavaScript, handling tasks like processing requests, managing databases, or serving files.

What makes Node.js special is its event-driven, non-blocking architecture. Instead of waiting for one task to finish before starting another (like traditional servers), it handles multiple operations at once. This makes it fast and efficient, even for a small project like BlogA2.

Why I’m Using Node.js in BlogA2
Node.js was a no-brainer for BlogA2, and here’s why it fits so well:

JavaScript Everywhere: Since I’m already using JavaScript for the frontend with React, Node.js lets me stick to one language across the entire stack. This consistency speeds up development and reduces the learning curve.
MERN Stack Foundation: Node.js is the “N” in MERN (MongoDB, Express.js, React, Node.js). It works hand-in-hand with Express.js to build the backend, connects to MongoDB for data, and serves content to the React frontend seamlessly.
Lightweight and Fast: BlogA2 doesn’t need a heavy server setup—just something to handle user logins and article storage. Node.js is lightweight enough for this scale but powerful enough to grow if I ever expand the project.
NPM Ecosystem: Node.js comes with npm, the world’s largest package manager. For BlogA2, I used packages like Express.js and Mongoose (for MongoDB) to add functionality quickly without reinventing the wheel.
Portfolio Boost: Node.js is a must-know technology in the industry. Using it in BlogA2 sharpens my backend skills and shows I can build full-stack apps, which is a big plus for my portfolio.
How It Works in BlogA2
Node.js is the engine that keeps BlogA2 running. It powers the server, where Express.js lives, and handles all the behind-the-scenes work. When you log in, Node.js processes your request, talks to MongoDB via Express.js, and sends your articles back to the React frontend. When you publish a post, it takes your input, saves it to the database, and confirms success—all in real time.

For example:

A user hits the /login endpoint.
Node.js runs the Express.js code, checks credentials against MongoDB, and responds with a success or failure message.
The React frontend picks it up and updates your screen.
It’s simple but effective, keeping BlogA2 responsive and functional.

Why Not Something Else?
I could’ve used Python with Django or Ruby on Rails, but those would’ve meant learning new languages and frameworks for a small project. Node.js leverages my existing JavaScript knowledge, aligns with the MERN stack, and gets the job done without extra complexity.

In short, Node.js is the unsung hero of BlogA2. It’s the runtime that powers the backend, connects the dots between my tools, and keeps everything humming along. For a practice site meant to showcase my full-stack skills, it’s been the perfect choice.`,
    image: 'articlesImages/nodejs.png',
    imagePath: 'articlesImages/nodejs.png',
    authorId: '67ee782f03ead11d51257a7e',
    createdAt: '2025-04-04T12:43:15.803+00:00',
    updatedAt: '2025-04-04T12:43:15.803+00:00',
    author: {
      id: '67ee782f03ead11d51257a7e',
      image: 'alireza.jpg',
      role: 'admin',
      username: 'alireza',
    },
  },
]

export type { Post }
export default posts
