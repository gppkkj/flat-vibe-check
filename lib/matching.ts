import { mockUsers, UserProfile } from "@/data/mockUsers";

import {
  calculateCompatibility,
} from "@/lib/compatibility";

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

  // Anyone selected
  if (
    preferences.includes("Anyone")
  ) {
    return true;
  }

  // Candidate is Male
  if (
    candidate.gender === "Male" &&
    preferences.includes("Men")
  ) {
    return true;
  }

  // Candidate is Female
  if (
    candidate.gender === "Female" &&
    preferences.includes("Women")
  ) {
    return true;
  }

  // Candidate is Non-Binary
  if (
    candidate.gender ===
      "Non-Binary" &&
    preferences.includes(
      "Non-binary"
    )
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
      .filter((user) =>
        isAllowedGender(
          currentUser,
          user
        )
      )

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