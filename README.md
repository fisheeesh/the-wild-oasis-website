# The Wild Oasis – Hotel Reservation Website

The Wild Oasis is a hotel reservation website where guests can easily browse available cabins, book a reservation, and manage their own bookings. The system ensures that users can only edit or delete **their own reservations**, and past bookings are locked from changes. 

> **Payment is handled at the hotel upon arrival.**

Authentication is secured with **Google Sign-In** via **NextAuth.js**. Logged-in guests can also update their personal information such as **nationality** and **national ID**.

![User Interface](./public/preview.png)

---
## 📑 Table of Contents

- [✨ Features](#-features)
- [🗺️ Pages & Routes](#-pages--routes)
- [🛠️ Tech Stack](#-tech-stack)
- [🔒 Security](#-security)
- [💳 Payment Policy](#-payment-policy)
- [🎉 User Flow](#-user-flow)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🌐 Live Demo](#live-demo)
- [📎 License](#-license)

## ✨ Features

- 🏕️ Browse all available cabins with prices and discounts.
- 📅 Book a specific cabin by selecting:
  - Start date & end date.
  - Number of guests.
  - Optional observations.
- ✏️ Manage (edit/delete) your own reservations only.
- 🚫 Past reservations are not editable or deletable.
- 🔐 Google authentication (NextAuth.js).
- 📝 Edit personal profile (nationality, national ID).
- 🏄 Filter cabins based on guest capacity.
- 🙏 "Thank You" page after successful booking.

---

## 🗺️ Pages & Routes

- `/` – Landing page (main entry).
- `/login` – Login page (Google Sign-In).
- `/cabins` - Browse and filter cabins.
- `/cabins/{id}` -  Start the booking process.
- `/about` – About page (hotel history).
- `/account` – Protected guest area:
  - 🏡 **Home** – Overview and navigation.
  - 📃 **Reservations** – List, edit, and delete your bookings.
  - 🛠️ **Edit Profile** – Update personal information.

> ⛔️ Only authenticated users can access the guest area and make bookings.

---

## 🛠️ Tech Stack

- **Next.js (App Router)** – SSR / ISR / SSG.
- **Supabase** – Backend and database.
- **NextAuth.js** – Google authentication.
- **React** – Frontend.
- **Tailwind CSS** – Styling.
- **Heroicons** – Icons.
- **Date-fns** – Date utilities.
- **React Day Picker** – Calendar date selection.
- **React Hot Toast** – Notifications.

---

## 🔒 Security

- Guests can only manage **their own reservations**.
- Past bookings **cannot** be edited or deleted.
- Profile editing is limited to:
  - Nationality.
  - National ID.

---

## 💳 Payment Policy

- **No online payment.**
- Payment is made **on arrival at the hotel**.

---

## 🎉 User Flow

1. Visit the landing page.
2. Sign in using Google.
3. Browse cabins and select one.
4. Choose booking dates and number of guests.
5. Add optional observations.
6. Confirm booking → Navigate to the Thank You page.
7. Manage your bookings and personal info anytime.

---

## 🚀 Getting Started

### Prerequisites
- Supabase project (with tables and RLS policies configured)

### Installation

```bash
# Clone the repo
git clone https://github.com/fisheeesh/the-wild-oasis-website.git
cd the-wild-oasis-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Live Demo
Check out the live version of The Wild Oasis Website: https://the-wild-oasis-website-eta-flame.vercel.app

## 📎 License

This project is for learning purposes. This project is licensed under the [MIT License](LICENSE).

Contact: [swanphyo444@gmail.com](mailto:swanphyo444@gmail.com)

---