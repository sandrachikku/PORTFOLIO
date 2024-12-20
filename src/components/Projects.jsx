import React from 'react';

const Projects = () => {
    return (
        <>
         <div class="px-24">
        <h1 class="text-6xl italic font-serif bold ">Project</h1>
        <div class="py-24 px-36 grid gap-4 grid-cols-2 text-white">


              <div class="bg-gray-500 shadow-lg p-6 rounded-lg text-center "data-aos="fade-left" data-aos-delay="200">
                <img src="/images/Instagram.jpeg" alt="Instagram" class="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
                <h1 class="text-2xl font-bold">Instagram</h1><br />
                <p> An Instagram clone is a social media application designed to mimic the features of Instagram. The project includes  ,
                   User account creation and authentication.  ,
                   Uploading and sharing photos or videos.  ,
                   Commenting, liking, and following functionalities.  ,
                   Direct messaging between users.  ,
                   Backend storage for media and user data.   </p>
                <p class="text-lg font-sans bold">Tech Stack:-HTML,CSS,Bootstrap,Javascript,MongoDB,Nodejs,Expressjs,Reactjs</p>
              </div>


              <div class="bg-gray-500 shadow-lg p-6 rounded-lg text-center " data-aos="fade-right" data-aos-delay="200">
                <img src="/images/Flipkart.jpeg" alt="Flipkart" class="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
                <h1 class="text-2xl font-bold">Flipkart</h1> <br />
                <p>A Flipkart clone is an eCommerce web application that replicates the features of Flipkart. This project includes functionalities such as :
                   User registration and login.  ,
                   Browsing products with categories and search options.  ,
                   Adding items to the cart and making online payments.  ,
                   Admin dashboard for managing products, categories, and user data.  ,
                   Backend integration for handling data storage and transactions. </p>
                <p class="text-lg font-sans bold">Tech Stack :-HTML,CSS,Bootstrap,Javascript,MongoDB,Nodejs,Expressjs</p> 
              </div>


              <div class="bg-gray-500 shadow-lg p-6 rounded-lg text-center" data-aos="fade-left" data-aos-delay="200">
                <img src="/images/bookmy.jpg" alt="BookMyShow" class="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
                <h1 class="text-2xl font-bold">BookMyShow</h1> <br />
                <p>This project involves creating a web-based application that replicates the functionality of the popular ticket booking platform, Book My Show. Users can browse events, movies, and shows, book tickets, and make payments online. 
                   Key Features:
                    User registration and login.
                   , Browse and filter movies/events by categories, location, and timing.
                   , Seat selection with real-time availability.
                   , Secure online payment integration.
                   , Admin panel for managing listings and bookings.
                   </p>
                <p class="text-lg font-sans bold">Tech Stack:-HTML,CSS,Bootstrap,Javascript,MongoDB,Nodejs</p>
              </div>


              <div class="bg-gray-500 shadow-lg p-6 rounded-lg text-center" data-aos="fade-right" data-aos-delay="200">
                <img src="/images/weather.jpg" alt="Weather" class="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
                <h1 class="text-2xl font-bold">Weather</h1><br />
              <p >  A weather website provides real-time weather updates for any location. Key features include:  
                 Search functionality for location-specific weather details.  , 
                 Display of temperature, humidity, wind speed, and weather conditions.  , 
                 Integration of APIs like OpenWeatherMap for live data.  , 
                 Responsive design for a seamless experience across devices. </p>
                <p class="text-lg font-sans bold">Tech Stack:-HTML,CSS,Bootstrap,Javascript,MongoDB</p>
              </div>


              <div class="grid justify-items-center ml-96 pl-20" data-aos="fade-up" data-aos-delay="200">
              <div class="bg-gray-500 shadow-lg p-6 rounded-lg text-center">
                <img src="/images/Olx.jpeg" alt="Olx" class="mx-auto mb-4 w-16 h-16 hover:animate-spin"/>
                <h1 class="text-2xl font-bold">Olx</h1><br />
                <p>
                This project focuses on building an online platform similar to OLX, enabling users to buy and sell products. Users can post ads, search for items, and interact with sellers/buyers via the platform.
                Key Features:
                 User authentication and profile management.
                , Post, edit, and delete advertisements with images.
                , Search and filter products by categories, price, and location.
                , Integrated chat or messaging system for buyer-seller communication.
                , Admin dashboard to moderate listings and users.
                </p>
                <p class="text-lg font-sans bold">Tech Stack:-HTML,CSS,Bootstrap,Javascript,MongoDB,Nodejs,Expressjs</p>
              </div>
              </div>
            </div>
        </div>
        </>
    );
};

export default Projects