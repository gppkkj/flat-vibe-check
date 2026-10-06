export function calculateCompatibility(
  currentUser: any,
  candidate: any
) {
  let score = 60;

  const reasons: string[] = [];

  if (
    currentUser.sleepSchedule ===
    candidate.sleepSchedule
  ) {
    score += 8;
    reasons.push("Matching sleep schedule");
  }

  if (
    currentUser.personality ===
    candidate.personality
  ) {
    score += 8;
    reasons.push("Very similar personalities");
  }

  if (
    currentUser.cleanliness ===
    candidate.cleanliness
  ) {
    score += 8;
    reasons.push("Same cleanliness standards");
  }

  if (
    currentUser.foodHabits ===
    candidate.foodHabits
  ) {
    score += 8;
    reasons.push("Compatible food habits");
  }

  if (
    currentUser.workRoutine ===
    candidate.workRoutine
  ) {
    score += 8;
    reasons.push("Matching work routine");
  }

  if (
    currentUser.smoking ===
    candidate.smoking
  ) {
    score += 4;
    reasons.push("Similar smoking preferences");
  }

  if (
    currentUser.drinking ===
    candidate.drinking
  ) {
    score += 4;
    reasons.push("Similar drinking preferences");
  }

  if (
    currentUser.guests ===
    candidate.guests
  ) {
    score += 6;
    reasons.push("Guest expectations align");
  }

  score += Math.floor(Math.random() * 10);

  return {
    percentage: Math.min(score, 98),
    reasons,
  };
}