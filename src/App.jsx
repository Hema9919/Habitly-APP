import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Progress from "./pages/Progress";
import About from "./pages/About";
import Layout from "./Layout";

export const habitsarr = [
  {
    id: 1,
    emoji: "💧",
    name: "Drink 2L of water",
    streak: 5,
    doneToday: false,
  },
  {
    id: 2,
    emoji: "📖",
    name: "Read 10 pages",
    streak: 12,
    doneToday: true,
  },
  {
    id: 3,
    emoji: "🧘",
    name: "Morning stretch",
    streak: 3,
    doneToday: false,
  },
  {
    id: 4,
    emoji: "🚶",
    name: "Walk 20 minutes",
    streak: 8,
    doneToday: true,
  },
];

export default function App() {
  const [habits, setHabits] = useState(habitsarr);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Home habits={habits} setHabits={setHabits} />
          ),
        },
        {
          path: "progress",
          element: <Progress habits={habits} />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}