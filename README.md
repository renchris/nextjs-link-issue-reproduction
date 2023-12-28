## NextJS App Router Link Issue Reproduction

### Link to the code that reproduces this issue

https://github.com/renchris/nextjs-link-issue-reproduction

### To Reproduce

Per: [Navigate Between Pages](https://nextjs.org/learn-pages-router/basics/navigate-between-pages/client-side):

Client-Side Navigation
The [Link](https://nextjs.org/docs/api-reference/next/link) component enables client-side navigation between two pages in the same Next.js app.

Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

Here’s a simple way you can verify it:

Use the browser’s developer tools to change the background CSS property of <html> to yellow.
Click on the links to go back and forth between the two pages.
You’ll see that the yellow background persists between page transitions.
This shows that the browser does not load the full page and client-side navigation is working.

### Current vs. Expected behavior

## Current Behavior

Following the steps from the previous section, the yellow background does not persist and there is a hard page refresh between page transitions.

## Expected Behavior

Following the steps from the previous section, I expect that the yellow background will persist and that there is no hard page between page transitions.

## Documentation

The [App Router Documentation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-soft-navigation) states that the Link Component supports this "client-side routing" behavior out of the box via "soft navigation" but it does not.

4. Soft Navigation
By default, the browser performs a hard navigation between pages. This means the browser reloads the page and resets React state such as useState hooks in your app and browser state such as the user's scroll position or focused element. However, in Next.js, the App Router uses soft navigation. This means React only renders the segments that have changed while preserving React and browser state, and there is no full page reload.


### Verify canary release

- [X] I verified that the issue exists in the latest Next.js canary release

### Provide environment information

```bash
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 22.6.0: Wed Jul  5 22:22:05 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T6000
Binaries:
  Node: 18.18.0
  npm: 9.8.1
  Yarn: 1.22.19
  pnpm: 8.13.1
Relevant Packages:
  next: 14.0.5-canary.29
  eslint-config-next: 14.0.5-canary.29
  react: 18.2.0
  react-dom: 18.2.0
  typescript: 5.3.3
Next.js Config:
  output: N/A
```


### Which area(s) are affected? (Select all that apply)

App Router, Routing (next/router, next/navigation, next/link)

### Additional context

I tested my reproduction against both 14.0.4 previous stable and 14.0.5-canary.29 current canary