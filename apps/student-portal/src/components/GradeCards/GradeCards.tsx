const grades = [
  {
    grade: "1",
  },
  {
    grade: "2",
  },

  {
    grade: "3",
  },
  {
    grade: "4",
  },
];

export function GradeCards() {
  return (
    <section className="bg-amber-50">
      <div className="main-container">
        <h2 className="text-3xl font-bold mb-4 text-secondary">Grade Cards</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4">
          {grades.map((grade, index) => (
            <div
              key={index}
              className="py-16 flex items-center justify-center bg-primary rounded-xl"
            >
              <div className="flex">
                <h2 className="text-lg font-bold mb-2 text-white">
                  {grade.grade}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
