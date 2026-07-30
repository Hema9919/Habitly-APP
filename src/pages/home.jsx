import { useState } from "react";
import HabitCard from "../components/hapitcard";
import { habitsarr as initialHabits } from "../App";
const Home = ({ habits, setHabits }) => {

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, doneToday: !habit.doneToday } : habit,
      ),
    );
  };

  const doneCount = habits.filter((habit) => habit.doneToday).length;

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-1 text-3xl font-black">Today's habits</h1>

      <p className="mb-6 text-[#2E3B31]/50">
        {doneCount} of {habits.length} done today
      </p>

      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} toggleHabit={toggleHabit} />
        ))}
      </div>

      <p className="mt-6 text-center text-sm font-semibold text-[#2E3B31]/30">
        (only 2 cards drawn by hand here — the rest come from `habits array`
        once we add props)
      </p>
    </main>
  );
};

export default Home;
