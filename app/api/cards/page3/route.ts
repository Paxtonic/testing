import { NextResponse } from "next/server";

const STRINGS = [
  "Mercury", "Venus", "Earth", "Mars", "Jupiter",
  "Saturn", "Uranus", "Neptune", "Pluto", "Ceres",
  "Pallas", "Juno", "Vesta", "Astraea", "Hebe",
  "Iris", "Flora", "Metis", "Hygiea", "Themis",
];

export async function GET() {
  return NextResponse.json({ items: [...STRINGS], total: STRINGS.length });
}
