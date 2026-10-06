import { UserProfile } from "@/data/mockUsers";

export interface CompatibilityResult {
  score: number;
  percentage: number;
  reasons: string[];
}

export function calculateCompatibility(
  currentUser: any,
  candidate: UserProfile
): CompatibilityResult {

  let score = 0;

  const reasons: string[] = [];

  const maxScore = 110;

  // Sleep Schedule
  if (
    currentUser.sleepSchedule ===
    candidate.sleepSchedule
  ) {
    score += 15;
    reasons.push(
      "Same sleep schedule"
    );
  }

  // Personality
  if (
    currentUser.personality ===
    candidate.personality
  ) {
    score += 15;
    reasons.push(
      "Similar personality"
    );
  }

  // Cleanliness
  if (
    currentUser.cleanliness ===
    candidate.cleanliness
  ) {
    score += 15;
    reasons.push(
      "Same cleanliness level"
    );
  }

  // Food Habits
  if (
    currentUser.foodHabits ===
    candidate.foodHabits
  ) {
    score += 15;
    reasons.push(
      "Compatible food habits"
    );
  }

  // Guests
  if (
    currentUser.guests ===
    candidate.guests
  ) {
    score += 10;
    reasons.push(
      "Similar guest preferences"
    );
  }

  // Smoking
  if (
    currentUser.smoking ===
    candidate.smoking
  ) {
    score += 10;
    reasons.push(
      "Same smoking preference"
    );
  }

  // Drinking
  if (
    currentUser.drinking ===
    candidate.drinking
  ) {
    score += 10;
    reasons.push(
      "Same drinking preference"
    );
  }

  // Work Routine
  if (
    currentUser.workRoutine ===
    candidate.workRoutine
  ) {
    score += 10;
    reasons.push(
      "Compatible work routine"
    );
  }

  // Same City Bonus
  if (
    currentUser.city ===
    candidate.city
  ) {
    score += 5;
    reasons.push(
      "Located in same city"
    );
  }

  // Similar Age Bonus
  if (
    Math.abs(
      Number(currentUser.age) -
      candidate.age
    ) <= 3
  ) {
    score += 3;
    reasons.push(
      "Similar age group"
    );
  }

  // Occupation Bonus
  if (
    currentUser.occupation ===
    candidate.occupation
  ) {
    score += 2;
    reasons.push(
      "Similar profession"
    );
  }

  const percentage = Math.round(
    (score / maxScore) * 100
  );

  return {
    score,
    percentage,
    reasons,
  };
}