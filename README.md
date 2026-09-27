# ticketApp (tickets)

React mockup of a ticket-queue system: an agent logs in with a name and desk number, then can view the current queue or generate a new ticket. Data shown is static/mock.

> Learning project built in March 2021 while practicing React Router, Context API and the Ant Design component library. Kept public as part of my learning history.

## What it does

`RouterPage` sets up a `react-router-dom` v5 layout with an Ant Design `Sider` menu and three routes: `/ingresar`, `/cola`, `/crear` (plus `/escritorio`, referenced but with no implementing page in this repo).

- `Ingresar` — a form to enter agent name and desk number; on submit it saves them to `localStorage` and redirects to `/escritorio`. If those values already exist in storage, it redirects there directly.
- `Cola` — renders a hardcoded list of tickets ("being served" and "history") using Ant Design `List`/`Card`/`Tag`.
- `CrearTicket` — shows a "New Ticket" button whose click handler only logs to the console, and a static number below it.
- `UiContext` (React Context) plus the `useHideMenu` hook toggle whether the side menu is shown per page.

## Tech Stack

- React 17 / React DOM 17
- react-router-dom 5.2
- antd 4.13 with `@ant-design/icons`
- Create React App (`react-scripts` 4.0.3)

## Running Locally

```
yarn install
yarn start        # http://localhost:3000
```

- `yarn build` — production build into `build/`
- `yarn test` — runs the CRA test runner

## What I practiced

- Client-side routing with `react-router-dom` (`Switch`, `Route`, `Redirect`, `useHistory`)
- Sharing UI state across pages with React Context
- Building forms and layouts with Ant Design
- Reading/writing simple session data with `localStorage`
