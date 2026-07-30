const HabitCard = ({ habit, toggleHabit,  showButton = true,
  progressCard = false,
 }) => {
  return (
<div
  className={`flex items-center gap-4 rounded-2xl p-4 ${
    progressCard
      ? "bg-white"
      : habit.doneToday
      ? "bg-[#3F6C51]/5 ring-1 ring-[#3F6C51]/10"
      : "bg-white shadow-sm ring-1 ring-[#2E3B31]/5"
  }`}
>      {/* Emoji */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
          habit.doneToday ? "bg-white" : "bg-[#FAF7F0]"
        }`}
      >
        {habit.emoji}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="font-semibold">{habit.name}</p>

        <span
          className={`text-sm ${
            habit.doneToday ? "text-[#3F6C51]" : "text-[#2E3B31]/50"
          }`}
        >
          🔥 {habit.streak} day streak
        </span>
      </div>

      {/* Button */}
{showButton && (
  <button
    onClick={() => toggleHabit(habit.id)}
    className={`rounded-full px-4 py-2 text-sm font-bold transition ${
      habit.doneToday
        ? "bg-[#3F6C51] text-white"
        : "border-2 border-[#3F6C51] text-[#3F6C51] hover:bg-[#3F6C51] hover:text-white"
    }`}
  >
    {habit.doneToday ? "✓ Done today" : "Mark done"}
  </button>
)}    </div>
  );
};

export default HabitCard;
