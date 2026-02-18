# MyBlog (Blog App)

Single Page Application for browsing posts, managing favourites, and interacting with content.
Data is fetched from the DummyJSON API.

## About the Project

This project is a Next.js-based application featuring:

- Server-Side Rendering (SSR) & Static Site Generation (SSG) for optimal performance
- Post list, detailed post view, and comments
- Authentication simulation (Login/Logout)
- Interactive Likes system and Favourites list
- Client-side state persistence (Zustand)
- Responsive UI built with Tailwind CSS and Shadcn UI

## Technologies & Dependencies

- Next.js 15 (App Router)
- TypeScript
- Zustand (State management with persistence)
- Tailwind CSS & Shadcn UI (Styling)

## How to Run Locally

- Install dependencies:

```npm install```

- Start development server:

```npm run dev```

- Build for production:

```npm run build```

## Deployment

Netlify:  
[https://my-blog-next.netlify.app/](https://my-blog-next.netlify.app/)


## Project Structure

```text
app-next-5/
├── public/                - Static assets (images, icons)
├── src/
│   ├── app/               - File-based routing main feed and page layouts
│   │   ├── favourites/    - Favourites page
│   │   ├── login/         - Login page
│   │   └── posts/[id]/    - Dynamic route for post details
│   ├── components/        - Shared UI components (Navigation, Buttons)
│   │   └── ui/            - Base Shadcn UI components
│   ├── lib/               - Server Actions and utility functions
│   ├── store/             - Global state management (Zustand)
│   └── types/             - Shared TypeScript interfaces (Post, Comment)
└── package.json           - Project configuration and dependencies