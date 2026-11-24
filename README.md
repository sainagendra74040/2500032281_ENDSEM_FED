# LaptopZone – React Router DOM E-commerce (Basic)

A simple laptop store built with React, Vite and React Router DOM.

## Run

```bash
npm install
npm run dev
```

Open the URL shown (usually http://localhost:5173).

## Routes (react-router-dom)

| Path            | Page                          |
|-----------------|-------------------------------|
| `/`             | Home                          |
| `/products`     | All laptops (`?brand=HP` etc.)|
| `/products/:id` | Product detail                |
| `/cart`         | Shopping cart                 |
| `/login`        | Login                         |
| `/signup`       | Sign up                       |
| `/contact`      | Contact form                  |
| `/about`        | About                         |
| `*`             | 404 page                      |

## Structure

- `components/Layout.jsx` – Header + Sidebar + `<Outlet />` (page body) + Footer
- `components/Header.jsx`, `Sidebar.jsx`, `Footer.jsx`
- `pages/` – one file per route
- `StoreContext.jsx` – cart and login state (saved in localStorage)
- `data.js` – laptop list

Login/signup is a demo that stores users in the browser's localStorage. There is no real backend.
