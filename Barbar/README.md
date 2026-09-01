# Barbar - Barber Shop Landing Page

## Project Overview

This project is a single-page barber shop website designed to showcase a modern salon or beauty studio brand. It includes a hero section, feature highlights, service cards, testimonials, contact information, and a mobile-friendly navigation menu.

The project is built using plain HTML, CSS, and JavaScript, which makes it a great example for beginners learning how to create a complete website without using frameworks or libraries.

---

## What This Project Does

The website is designed like a real business landing page. It helps visitors:

- understand the barber shop brand
- see the key features of the service
- browse available services
- read customer testimonials
- find the shop contact details and opening hours
- navigate the page easily on desktop and mobile screens

The main goal is to create a clean and professional first impression for a hair salon business.

---

## Project Structure

The project contains the following files:

- `index.html` - page structure and content
- `style.css` - visual styling and layout
- `script.js` - interactive menu and page behavior
- `Images/` - icons, logo, background images, and gallery images

---

## How the Project Was Built

### 1. HTML Structure
The main page is created in `index.html`.

It is divided into several sections:

- Hero banner
- Feature section
- Services section
- Testimonial section
- Contact/footer section

Each section is placed inside meaningful tags like:

- `section` for major blocks
- `div` for layout containers
- `img` for images and icons
- `a` for links and buttons

This makes the page well organized and easy to understand.

### 2. Content Layout
The landing page uses headings, paragraphs, buttons, and cards to present information clearly.

Examples from the page include:

- Hair Studio heading in the banner
- service items like Hair Styling, Beard Trim, Haircut, and Dry Shampoo
- promotional text like "Why choose us"
- customer reviews in the testimonial area

This type of content design is common in marketing websites because it helps users quickly understand the business.

### 3. JavaScript Interactions
The interactive logic is written in `script.js`.

This file handles:

- the side navigation menu
- smooth scrolling between sections
- preloader effect before the page fully loads

#### Menu functionality
The menu button opens and closes the side menu. JavaScript checks the current position of the sidebar and changes its `right` property to slide it in or out.

#### Smooth scrolling
The project uses a smooth-scroll library to make the anchor links move smoothly when users click navigation items.

#### Preloader
Before the page fully loads, a loader is displayed. Once the page finishes loading, the loader is hidden using the `window.addEventListener("load", ...)` event.

This gives the website a more polished user experience.

---

## Beginner-Friendly Explanation

If you are new to web development, here is the simple idea:

- HTML gives structure to the page.
- CSS gives the page design and layout.
- JavaScript adds behavior such as opening menus and scrolling smoothly.

This project is a classic example of how a website is built from scratch using these three technologies.

---

## Key Sections in the Page

### Hero Banner
This is the first section users see when entering the site. It includes:

- logo
- large headline
- short slogan
- two buttons: Find Out and Read More

This area is designed to attract attention and explain the salon brand immediately.

### Features Section
This section explains why clients should choose the barber shop. It includes:

- experienced staff
- online booking
- affordable pricing

The layout uses text and icons to make the information easy to read.

### Services Section
This area showcases the kinds of services offered, like:

- hair styling
- beard trim
- hair cut
- dry shampoo

Each service is shown in a card-like layout, making the page visually attractive.

### Testimonial Section
This helps build trust by showing what customers say about the service.

The page includes user profile images, names, and short quotes. This is a common feature used by businesses to show social proof.

### Footer / Contact Section
This section contains:

- opening hours
- shop address
- email
- phone number
- social media icons

This is important because it gives the user a way to contact the business.

---

## How to Run This Project

Since this is a static website, you can run it in two easy ways:

### Option 1: Open directly in browser
1. Go to the project folder.
2. Open `index.html` in your browser.
3. The website will load and display properly.

### Option 2: Use a local live server
If you are using VS Code:

1. Open the project folder in VS Code.
2. Install a live preview or live server extension.
3. Open `index.html` with the extension.
4. The page will reload automatically when changes are made.

---

## Important JavaScript Logic Explained

Here is the main logic behind the interactive parts:

```javascript
var menuBtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
```

These lines grab the menu button and sidebar from the HTML page.

```javascript
if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
}
```

This checks if the sidebar is hidden, then slides it into view.

```javascript
window.addEventListener("load", function(){
    loader.style.display = "none";
});
```

This hides the loading screen after the page has fully loaded.

---

## Learning Points for Beginners

This project helps learners practice:

- creating page sections with HTML
- organizing content in a clean layout
- linking multiple sections using anchor links
- adding simple JavaScript interactivity
- working with images and icons
- designing a business landing page

It is a strong beginner project because it shows how real websites are structured and how different sections work together.

---

## Summary

The Barbar project is a clean barber shop landing page built using HTML, CSS, and JavaScript. It demonstrates how to create a professional business website with a modern look, section-based layout, working navigation, and simple interactive features.

This project is ideal for beginners who want to understand how a real-world landing page is designed and how JavaScript can improve the user experience.

---


