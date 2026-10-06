export interface UserProfile {
  id: number;

  name: string;

  gender:
    | "Male"
    | "Female"
    | "Non-Binary";

  age: number;

  city: string;

  occupation: string;

  livingWith: string[];

  sleepSchedule: string;

  personality: string;

  preferredRoommate: string;

  cleanliness: string;

  foodHabits: string;

  guests: string;

  smoking: string;

  drinking: string;

  workRoutine: string;

  image: string;
}

const maleNames = [
  "Rahul",
  "Sai",
  "Arjun",
  "Vikram",
  "Karthik",
  "Rohit",
  "Abhishek",
  "Ajay",
  "Tarun",
  "Varun",
  "Nikhil",
  "Praneeth",
  "Harsha",
  "Teja",
  "Surya",
];

const femaleNames = [
  "Aisha",
  "Sneha",
  "Ananya",
  "Pooja",
  "Keerthi",
  "Divya",
  "Meghana",
  "Harika",
  "Nandini",
  "Priya",
  "Lavanya",
  "Bhavya",
  "Sravani",
  "Deepika",
  "Aparna",
];

const nonBinaryNames = [
  "Alex",
  "Jordan",
  "Sam",
  "Avery",
  "Taylor",
  "Morgan",
  "Casey",
];

const cities = [
  "Hyderabad",
  "Secunderabad",
  "Gachibowli",
  "Madhapur",
  "Kukatpally",
  "Ameerpet",
  "Hitech City",
  "Kondapur",
  "Uppal",
  "LB Nagar",
  "Warangal",
  "Karimnagar",
  "Khammam",
  "Nizamabad",
  "Siddipet",
  "Nalgonda",
  "Adilabad",
  "Suryapet",
  "Sangareddy",
  "Mahbubnagar",
];

const occupations = [
  "Software Engineer",
  "Student",
  "Doctor",
  "Teacher",
  "Designer",
  "Freelancer",
  "Accountant",
  "HR Manager",
  "Marketing Executive",
  "Data Analyst",
  "Nurse",
  "Lawyer",
];

function random<T>(arr: readonly T[]): T {
  return arr[
    Math.floor(Math.random() * arr.length)
  ];
}

function randomAge() {
  return (
    Math.floor(Math.random() * 12) + 18
  );
}

function randomGender() {
  const genders = [
    "Male",
    "Female",
    "Non-Binary",
  ] as const;

  return random(genders);
}

function getName(
  gender: string
) {
  if (gender === "Male")
    return random(maleNames);

  if (gender === "Female")
    return random(femaleNames);

  return random(nonBinaryNames);
}

export const mockUsers: UserProfile[] =
Array.from(
  { length: 250 },
  (_, index) => {
    const gender =
      randomGender();

    return {
      id: index + 1,

      name: `${getName(
        gender
      )} ${
        [
          "Reddy",
          "Sharma",
          "Khan",
          "Patel",
          "Rao",
          "Kumar",
          "Verma",
          "Singh",
        ][index % 8]
      }`,

      gender,

      age: randomAge(),

      city: random(cities),

      occupation:
        random(occupations),

      livingWith: [
        random([
          "Men",
          "Women",
          "Non-binary",
          "Anyone",
        ]),
      ],

      sleepSchedule:
        random([
          "night",
          "early",
          "flexible",
          "shift",
        ]),

      personality:
        random([
          "introvert",
          "extrovert",
          "ambivert",
        ]),

      preferredRoommate:
        random([
          "introvert",
          "extrovert",
          "none",
        ]),

      cleanliness:
        random([
          "very-tidy",
          "generally-neat",
          "organised-chaos",
          "relaxed",
        ]),

      foodHabits:
        random([
          "vegetarian",
          "nonveg",
          "vegan",
          "nopref",
        ]),

      guests:
        random([
          "rarely",
          "occasionally",
          "often",
          "planned",
        ]),

      smoking:
        random([
          "Yes",
          "No",
          "Sometimes",
        ]),

      drinking:
        random([
          "Yes",
          "No",
          "Sometimes",
        ]),

      workRoutine:
        random([
          "office",
          "remote",
          "hybrid",
          "freelance",
        ]),

      image: `/profile${
        (index % 10) + 1
      }.jpg`,
    };
  }
);