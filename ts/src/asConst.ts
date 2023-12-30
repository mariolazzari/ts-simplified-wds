// as const
const numString = ["1", "2", "3"];
const numConst = ["1", "2", "3"] as const; // readonly array of 1,2, and 3
const a1 = numConst[0]; // "1"

const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const;

type Develop = {
  // skillLevel: "Beginner" | "Intermediate" | "Expert";
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach(sl => console.log(sl));

// readonly obj
const develop = {
  name: "Mario",
  age: 48,
  address: {
    street: "My street",
  },
} as const;
