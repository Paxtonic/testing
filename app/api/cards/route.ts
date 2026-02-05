import { NextResponse } from "next/server";

const STRINGS = [
  "x7Kp2mNq", "9LwR4vBn", "cF3hT8yJ", "kP6sQ1zM", "dW5aX0gH",
  "bY2eU7iO", "rA4nC9jL", "fV6tI3pS", "qE8oK1uZ", "mG0wR5xB",
  "hN2vD7cF", "jL4sT9aQ", "pY6zW1eM", "bK3xU8iH", "nR0gV5oC",
  "tA2jC7qE", "wF4mP9sL", "dI6uX1zN", "vB8hT3yK", "oE0rG5aW",
];

export async function GET() {
  return NextResponse.json({ items: [...STRINGS], total: STRINGS.length });
}
