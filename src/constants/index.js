import { FaSearch, FaCalendarAlt, FaCar } from "react-icons/fa";

import car01 from "../assets/car01.png";
import car02 from "../assets/car02.png";
import car03 from "../assets/car03.png";

import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import user04 from "../assets/user04.png";

export const intro = {
  title: "Welcome to CarVeo",
  description:
    "Your ultimate destination for finding the perfect car. Explore our extensive collection and drive away in your dream vehicle today.",
};

export const menuItems = [
  { name: "Home", href: "../Components/Header/Header.jsx" },
  { name: "Services", href: "./Components/Services/Service.jsx" },
  { name: "About", href: "#about" },
  { name: "Team", href: "../Components/Reviews/Reviews.jsx" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "../Components/Footer/Credits.jsx" },
];

export const carsInfo = [
  {
    name: "Fortuner",
    purpose: "selling",
    image: car01,
  },
  {
    name: "Chevrolet Camaro",
    purpose: "buying",
    image: car02,
  },
  {
    name: "Toyota Car",
    purpose: "renting",
    image: car03,
  },
];

export const reviews = [
  {
    name: "Emily Clark",
    role: "Car Enthusiast",
    avatar: user01,
    quote:
      "I found my dream car here! The process was seamless and the staff was very helpful.",
    rating: 4.9,
    totalReviews: 45,
  },
  {
    name: "Michael Brown",
    role: "Professional Racer",
    avatar: user02,
    quote:
      "Great selection of high-performance cars. The customer service is top-notch.",
    rating: 5.0,
    totalReviews: 60,
  },
  {
    name: "Samantha Green",
    role: "Mechanic",
    avatar: user03,
    quote:
      "Bought a car for my workshop. The quality is excellent and the price was reasonable.",
    rating: 4.7,
    totalReviews: 30,
  },
  {
    name: "James Wilson",
    role: "SUV Lover",
    avatar: user04,
    quote:
      "Fantastic range of SUVs. I am very satisfied with my purchase and the overall experience.",
    rating: 4.8,
    totalReviews: 38,
  },
  {
    name: "Linda Johnson",
    role: "Family Driver",
    avatar: user03,
    quote:
      "The perfect place to find a family car. Safe, reliable, and affordable options.",
    rating: 4.9,
    totalReviews: 52,
  },
  {
    name: "Robert Davis",
    role: "Classic Car Collector",
    avatar: user02,
    quote:
      "An amazing collection of classic cars. I found exactly what I was looking for.",
    rating: 5.0,
    totalReviews: 40,
  },
];

export const steps = [
  {
    icon: FaSearch,
    bgFrom: "from-blue-500",
    bgTo: "to-purple-500",
    title: "Browse Inventory",
    description:
      "Explore our extensive collection of cars to find the one that suits your needs.",
  },
  {
    icon: FaCalendarAlt,
    bgFrom: "from-green-500",
    bgTo: "to-teal-500",
    title: "Schedule a Test Drive",
    description:
      "Set up a test drive to experience the car and ensure it's the right fit for you.",
  },
  {
    icon: FaCar,
    bgFrom: "from-red-500",
    bgTo: "to-pink-500",
    title: "Finalize Your Purchase",
    description: "Complete the paperwork and drive away in your new car!",
  },
];

export const footer = {
  title: "CarVista",
  slogan: "See the Road Ahead",
  description:
    " CarVista offers the best selection of cars to help you find the perfect ride for your needs. Whether you're looking for a family car, a high-performance vehicle, or a classic collectible, we've got you covered.",
};

// Car - Favicon
// https://img.icons8.com/?size=100&id=kfRfIRUL7jMk&format=png&color=000000

{
  // Wave Svg - later we will use it
  /* <div className="absolute inset-x-0 bottom-0 z-0">
      <svg
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={`${darkMode ? "#334155" : "white"}`}
          fillOpacity="1"
          d="M0,224L40,240C80,256,160,288,240,293.3C320,299,400,277,480,261.3C560,245,640,235,720,240C800,245,880,267,960,277.3C1040,288,1120,288,1200,261.3C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div> */
}

// scroll bar
/* ::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gray-200 dark:bg-gray-700;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-600 dark:bg-slate-400 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-700 dark:bg-slate-500;
} */
