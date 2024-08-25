<div align="center">
<h2><a href="https://react-pizza-24.netlify.app/">Fast React Pizza Co. 🍕</a></h2>
<h3>Welcome to Fast React Pizza Co., a user-friendly application designed to make your pizza ordering experience as simple and enjoyable as possible.
</h3>
</div>
<h2></h2>
<center><a href="https://react-pizza-24.netlify.app/"><img src="/public/Pizza-Co-.png"/></a></center>

## Technologies Used 
1. **React**
1. **Routing:** React Router
1. **Styling:** TailwindCSS
1. **Remote State Management:** React Router
1. **UI State Management:** Redux Toolkit

<h2>State Management</h2>

* **User:** Global UI state (No accounts)
* **Menu:** Global remote state (Menu fetched from API)
* **Cart:** Global UI state
* **Order:** Global remote state (Fetched and submitted to API)

<h2>Features</h2>

* Very simple application, where users can order one or more pizzas from a menu.
* Requires no user accounts and no login: users just input their names before using the app
* The pizza menu can change, so it should be loaded from an API
* Users can add multiple pizzas to a cart before ordering
* Ordering requires just the user's name, phone number, and address
* If possible, GPS location should also be provided, to make delivery easier
* User's can mark their order as "priority" for an additional 20% of the cart price
* Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API
* Payments are made on delivery, so no payment processing is necessary in the app
* Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID
* Users should be able to mark their order as "priority" order even after it has been placed

<h2>Pages</h2>

1. Homepage: `/`
1. Pizza Menu `/menu`
1. Cart: `/cart`
1. Placing a new order: `/order/new`
1. Looking up an order: `/order/:orderID`

<h2>Contact</h2>

If you have any questions or need more information, please feel free to contact us:

* **Email:** ahmedfaresss417@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/dev-ahmedfares/