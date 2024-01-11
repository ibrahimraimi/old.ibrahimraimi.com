---
title: "Data fetching in React with SWR"
publishedAt: 2023-02-03
description: "Guide to data fetching in React with SWR."
slug: "data-fetching-with-swr"
isPublish: true
---

## What is SWR?

Usually, when we make a fetch request, we use the native `fetch` or a third-party library like `axios`. The browser then makes an HTTP call and accepts a response. While the call is being made, the user waits, usually staring at a loading indicator.

SWR enhances data fetching with caching, revalidation, and request deduplication. The name "SWR" is derived from `stale-while-revalidate`, an HTTP cache invalidation strategy. It exposes React hooks that we can use for data fetching in our applications.

## Why use SWR instead of fetch or axios?

When we use SWR for data fetching, it returns the data from the cache (stale), then sends the request (revalidate) and returns the up-to-date data. SWR will automatically cache the response the first time we fetch it.

With just one single line of code, you can simplify the logic of data fetching in your project, and also have all these amazing features out-of-the-box:

- **Fast**, **lightweight**, and **reusable** data fetching
- Built-in **cache** and request deduplication
- **Real-time** experience
- Transport and protocol agnostic
- SSR / ISR / SSG support
- TypeScript ready
- React Native

SWR has you covered in all aspects of speed, correctness, and stability to help you build better experiences:

- Fast page navigation
- Polling on interval
- Data dependency
- Revalidation on focus
- Revalidation on network recovery
- Local mutation (Optimistic UI)
- Smart error retry
- Pagination and scroll position recovery
- React Suspense

## Getting Started

### Installation

```bash
yarn add swr
```

Or

```bash
npm install swr
```

For normal RESTful API with JSON data, you first need to create a `fetcher` function, which is just a wrapper of the native `fetch`:

```js
const fetcher = (...args) => fetch(...args).then(res => res.json())
```

You can also use `axios` in you fetcher function:

```js
const fetcher = url => axios.get(url).then(res => res.data)
```

### Why do we still need fetch or axios when using SWR?
>
> SWR does not replace native `fetch` or `axios`. We'll always need them because SWR only wraps around them. And one of the arguments we pass to the `useSWR` hook is the fetcher function that uses `fetch` or `axios`.

Now we can import the `useSWR` hook and start using it inside any function components:

```js
import useSWR from "swr"

const Profile = () => {
  const {data, error, isLoading} = useSWR("/api/users/123", fetcher)
  
  if (error) return <div>Failed to load profile</div>
  if (isLoading) return <div>Loading...</div>
  
  // render data
  return (
      <div>{data.name}</div>
  )
}
```

NOTE: We have 3 possible states of a request: `loading`, `ready`, or `error`.
We use the value of `data`, `error`, and `isLoading` to determine these states and return the corresponding UI.

## Make it Reusable

The real power of using SWR shows when you can reuse data fetching code. When building an application, we might need to reuse the data we fetch in multiple places. SWR makes it incredibly easy to create custom data-fetching hooks that we can use in any of our components.

```js
export const useUser = (userId) => {
    const { data, error } = useSWR(`/api/users/${userId}`, fetcher)
    return {
        user: data?.user,
        isLoading: !error && !data,
        isError: error
    }
}
```

Now we can use it in any component like this:

```js
const Profile = ({ userId }) => {
  const { user, isLoading, isError } = useUser(userId)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occurred...</div>

  return (
    <div>
          <img src={user.avatar} />
          <span>{user.name}</span>
          <span>{user. Email}</span>
    </div>
)
}
```

SWR is a better way to fetch data in our React applications. It abstracts away many features that we normally would have written ourselves if our application requires them. It also gives us good defaults so we don't have to spend a lot of time in configuration. Most important of all, it has a simple API and is easy to use.
For more information on SWR, check out the official [documentation](https://swr.vercel.app/docs/getting-started)

There is also an alternative to SWR called [react-query](https://react-query-v3.tanstack.com/) which I haven't used, yet. I'll cover that in a future post. I hope you enjoyed this post. Have you used SWR before or have any questions about SWR? Let me know in the comments.

Until next time, peace ✌️
