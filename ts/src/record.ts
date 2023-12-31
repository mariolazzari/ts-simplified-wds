type Author = {
  name: string;
  age: number;
};

type AuthorGroupName = {
  // [index: Author["name"]]: Author[];
  [key: string]: Author[];
};

type AuthorRecord = Record<Author["name"], Author[]>;
// type AuthorRecord = Record<string, Author[]>;
