import { mockUsers, UserProfile } from "@/data/mockUsers";

import {
  calculateCompatibility,
} from "../lib/compatibility";

export interface MatchResult
  extends UserProfile {
  compatibility: number;
  reasons: string[];
}

function isAllowedGender(
  currentUser: any,
  candidate: UserProfile
) {
  const preferences =
    currentUser.livingWith || [];

  if (preferences.includes("anyone")) {
    return true;
  }

  if (
    candidate.gender === "Male" &&
    preferences.includes("men")
  ) {
    return true;
  }

  if (
    candidate.gender === "Female" &&
    preferences.includes("women")
  ) {
    return true;
  }

  if (
    candidate.gender === "Non-Binary" &&
    preferences.includes("nonbinary")
  ) {
    return true;
  }

  return false;
}

export function findMatches(
  currentUser: any
): MatchResult[] {

  const matches =
    mockUsers

      // remove self if same name
      .filter(
        (user) =>
          user.name !==
          currentUser.fullName
      )

      // Open To Live With filter
      .filter((user) => {
  const filtered =
    isAllowedGender(
      currentUser,
      user
    );

  return filtered;
})

      .map((user) => {

        const result =
          calculateCompatibility(
            currentUser,
            user
          );

        return {
          ...user,

          compatibility:
            result.percentage,

          reasons:
            result.reasons,
        };
      })

      .sort(
        (a, b) =>
          b.compatibility -
          a.compatibility
      )

      .slice(0, 20);

  return matches;
}