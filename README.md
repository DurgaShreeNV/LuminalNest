![image](https://github.com/DurgaShreeNV/test/assets/155233552/fd52114e-2952-46ac-9c46-c6732b718faa)
# Luminal Nest

## Description
Luminal Nest is a dynamic rental website offering a diverse selection of homes, rooms, and lodges in top travel destinations. Leveraging cutting-edge technologies such as HTML5, React JS, Redux, and JWT for security. Powered by Node JS for server-side scripting and MongoDB for efficient data management, Luminal Nest delivers fast and reliable performance, allowing users to browse and book accommodations with ease. With SCSS for styling and Material UI for visual appeal, the website offers a sleek and intuitive interface that enhances the user experience.

## Features
- ### Explore Diverse Stays
  Browse through a curated selection of accommodations, ranging from rustic cabins nestled in the woods to modern apartments in bustling city centers.
- ### Easy Booking
  Our user-friendly booking system allows you to effortlessly reserve your preferred stay with just a few clicks, ensuring a hassle-free booking experience.
- ### Host Management
  Become a host and add your listings to Luminal Nest, manage your properties, and track reservations with ease. Hosts can access reservation lists to keep track of bookings for their properties.
- ### Additional Pages
  Explore various pages such as trip lists, wish lists, property lists, and reservation lists, providing a comprehensive platform for managing your travel plans and accommodations.

## Local Development
Luminal Nest has been successfully developed and tested locally. It has not been deployed to any production environment yet.

## Screenshots
Screenshots of the Luminal Nest website will be added here to showcase its features and user interface.

- ## Home page:
  The website features a logo positioned at the top left corner across all pages. Clicking on the logo redirects users to the home page, ensuring consistent and easy navigation throughout the website. 
The Navbar provides intuitive navigation along with search functionality and a dynamic dropdown menu. Initially presenting login and sign-up options, upon user authentication, it showcases the user's profile picture and grants access to trip lists, wish lists, property lists, reservation lists, and host functionalities for a seamless browsing experience. Additionally, a "Become a Host" link enables users to post their places as listings, with access to the reservation list to monitor bookings.

<p align="center">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/df006afc-6b3d-44f4-983b-f9764c94fdd9" alt="image" width="250" height="200">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/145f83d2-8a3b-4df8-91b8-c6441f1e32d9" alt="image" width="250" height="200">
</p>

- ## Home page's explore top categories section:
  On scrolling down the home page, expect an engaging user experience enriched with captivating visuals and interactive elements. As you hover over each category icon, anticipate a delightful animation or effect that enhances the browsing journey. 

 ![image](https://github.com/DurgaShreeNV/test/assets/155233552/371d6467-85af-4e32-9fc5-19fe14072bbd)

- ## Home page's listings section:
  As users scroll down the home page, Luminal Nest presents a dynamic array of listings categorized by type. Leveraging React components and Redux state management, this section allows seamless exploration of accommodations with features like wishlisting and interactive slide navigation.

 ![image](https://github.com/DurgaShreeNV/test/assets/155233552/9cc1402f-a7b4-442f-9ee7-8682d7f360d3)

 As shown in the above screenshot, the Listings component offers users a comprehensive view of listings spanning all categories. With the ability to filter by specific categories like beachfront, windmills, iconic cities, and more, users can easily explore listings tailored to their preferences.

 ![image](https://github.com/DurgaShreeNV/test/assets/155233552/b4b72bb3-df60-45ed-829b-0ad7e2745102)

- ## Home page's footer section:
  Footer encompasses an "About Us" section providing insights into the platform's ethos, alongside a contact section featuring essential contact details, including phone number and email address.

  ![image](https://github.com/DurgaShreeNV/test/assets/155233552/3ddc44fa-8f3a-43d4-b111-babbad3ae332)

- ## Sign Up page:
  The sign-up page provides users with a form to create a new account, allowing them to enter their personal details including name, email, and password, and upload a profile photo. Upon submission, the user is directed to the login page.

  ![image](https://github.com/DurgaShreeNV/test/assets/155233552/04c8eec3-f8d1-4c92-b319-608ad45842b6)

- ## Login page:
  The login page presents users with a form to enter their email and password for authentication. Upon submission, the user's credentials are verified through a server request. If successful, the user is logged in and redirected to the home page. Additionally, users have the option to navigate to the registration page if they do not have an account.

  ![image](https://github.com/DurgaShreeNV/test/assets/155233552/103a1c10-5b14-4ac9-a048-55356f2bf7a3)

- ## Create listing page:
  This page provides users with a robust platform to publish their properties efficiently. Through structured form fields, users can input detailed information about their place, including categories, location specifics, basic counts, amenities, and compelling photos. This technical interface ensures a systematic approach to listing creation, enhancing user experience by guiding them through each step seamlessly. Upon submission, the data is processed and stored, enabling users to showcase their property effectively on the platform.

<p align="center">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/20925283-cc45-4530-92cb-908ea3313e0e" alt="image" width="440" height="280">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/3fe00dda-0879-4769-a31d-db8ab90395a4" alt="image" width="440" height="280">
</p>

<p align="center">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/8d6ee9ec-e635-41db-bb27-f0d98f23220c" alt="image" width="430" height="280">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/f49aa997-c346-4cc6-818f-bfacd10ff904" alt="image" width="440" height="280">
</p>

<p align="center">
  <img src="https://github.com/DurgaShreeNV/test/assets/155233552/b5f30a53-fc25-463c-b00c-53e098c1432d" alt="image" width="440" height="280">
</p>

Upon successful completion of the listing creation process, users are redirected to the home page, where they can instantly view their newly listed property displayed as a card within the listings. This seamless transition ensures immediate visibility and accessibility of the newly added listing, enhancing the user's experience on the platform.

- ## Properties page:
  The Properties page, represented by ListingDetails.jsx, retrieves and displays detailed information about a specific property. Utilizing React Router and useParams, it dynamically fetches data for the designated property based on the provided listing ID. The page presents various details including property title, description, location, amenities, and booking functionality. Additionally, it allows users to select dates for booking through a calendar component and calculates the total price based on the selected duration. The server-side model, booking.js, defines the MongoDB schema for bookings, ensuring the structured storage and retrieval of booking-related data such as customer ID, host ID, listing ID, booking duration, and total price.

  ![image](https://github.com/DurgaShreeNV/test/assets/155233552/d2ea80c3-c46d-4503-9410-21554bb9ec34)

  <p align="center">
    <img src="https://github.com/DurgaShreeNV/test/assets/155233552/91d8cf66-004e-4cc8-841e-79a4c92d908b" alt="image" width="450" height="280">
    <img src="https://github.com/DurgaShreeNV/test/assets/155233552/f07da26d-8b76-4998-987d-9d4be95e58ab" alt="image" width="450" height="280">
  </p>
In addition to all these pages, the website features additional pages including trip lists, wish lists, property lists, and reservation lists.

- ## Summary:
  Built a dynamic rental platform using HTML5, React JS, Redux, and JWT for security, coupled with Node JS, MongoDB, SCSS, and Material UI for efficiency and visual appeal.
