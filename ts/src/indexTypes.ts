// Index types
type SkillLevel = "beginner" | "intermediate" | "expert" | "master";

type Developer = {
  name: string;
  skillLevel: SkillLevel;
  isDev?: boolean;
};

const dev: Developer = {
  name: "Mario",
  skillLevel: "expert",
};

function printSkillLevel(skillLevel: Developer["skillLevel"]) {
  console.log(skillLevel);
}

printSkillLevel(dev.skillLevel);

type SkillLevelGroup = {
  [index: Developer["name"]]: Developer[];
};

const aList = ["test", "1", true];

type AType = (typeof a)[keyof typeof a];
