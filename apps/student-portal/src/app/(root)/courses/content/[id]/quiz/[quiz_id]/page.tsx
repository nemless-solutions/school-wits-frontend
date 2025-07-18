const dummy = {
  id: 1,
  title: "Test Quiz",
  questionMark: 10,
  duration: 10,
  questions: [
    {
      id: 1,
      title: "Test quiz question 1",
      answers: [
        { id: 1, title: "Test Quiz Answer 1" },
        { id: 2, title: "Test Quiz Answer 2" },
        { id: 3, title: "Test Quiz Answer 3" },
        { id: 4, title: "Test Quiz Answer 4" },
      ],
    },
  ],
  createdAt: "2025-07-18T14:59:09.815+00:00",
};

export default async function Quiz({
  params,
}: {
  params: Promise<{ quiz_id: string }>;
}) {
  /*   const quizId = (await params).quiz_id;
  const session = await auth(); */

  return (
    <div className="h-full flex items-center justify-center border border-neutral-200 shadow-md rounded-lg text-2xl font-semibold text-neutral-400">
      Coming Soon...
    </div>
  );

  return (
    <div className="p-4 bg-white border border-neutral-200 shadow-md">
      <h2 className="text-2xl">
        <span className="font-semibold">Quiz:</span> {dummy.title}
      </h2>
      <p className="my-2">Mark: {dummy.questionMark}</p>
      {dummy.questions.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
