import { ExerciseCard } from "./ExerciseCard";
import { SectionWrapper } from "./SectionWrapper";

export function Workout({ workout }) {
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
