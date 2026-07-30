import HabitCard from "../components/hapitcard";

const Progress = ({habits}) => {
  const doneHabits = habits.filter((habit) => habit.doneToday);
  return (
    <>
      {/* =========================== PROGRESS PAGE =========================== */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-1 text-3xl font-black">Your progress</h1>
        <p className="mb-6 text-[#2E3B31]/50">Habits you've completed today</p>

        <div className="space-y-3">
          {doneHabits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              showButton={false}
              progressCard={true}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Progress;
