export interface UserQuestionnaire {
  fullName?: string;
  age?: number;
  gender?: string;
  city?: string;

  livingWith?: string[];

  sleepSchedule?: string;

  personality?: string;

  preferredRoommate?: string;

  cleanliness?: string;

  foodHabits?: string;

  guests?: string;

  smoking?: string;

  drinking?: string;

  workRoutine?: string;

  dealBreakers?: string;
}

const STORAGE_KEY = "userProfile";

export const saveAnswer = (
  key: string,
  value: any
) => {
  if (typeof window === "undefined") return;

  const existing = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
  );

  existing[key] = value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(existing)
  );
};

export const getProfile =
  (): UserQuestionnaire => {
    if (typeof window === "undefined")
      return {};

    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );
  };

export const clearProfile = () => {
  if (typeof window === "undefined")
    return;

  localStorage.removeItem(STORAGE_KEY);
};