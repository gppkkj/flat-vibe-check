export default function HowItWorks() {

  const steps = [
    {
      number: "1",
      title: "Create Profile",
      desc: "Enter personal details, lifestyle preferences, and accommodation requirements.",
    },
    {
      number: "2",
      title: "Complete Questionnaire",
      desc: "Answer behavioral and habit-based questions used for compatibility assessment.",
    },
    {
      number: "3",
      title: "AI Analysis",
      desc: "AI generates behavioral profiles, trust scores, and compatibility insights.",
    },
    {
      number: "4",
      title: "Find Compatible Flatmates",
      desc: "Receive personalized roommate recommendations with compatibility explanations.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#f8f7ff] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-500 mt-4">
          A simple 4-step process to find your perfect flatmate.
        </p>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">

                {step.number}

              </div>

              <h3 className="font-bold text-xl mt-6">
                {step.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}