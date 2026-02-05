import { NextResponse } from "next/server";

const STRINGS = [
  "Alpha1B", "Beta2C", "Gamma3D", "Delta4E", "Epsilon5F",
  "Zeta6G", "Eta7H", "Theta8I", "Iota9J", "Kappa0K",
  "LambdaA", "MuB2", "NuC3", "XiD4", "OmicronE5",
  "PiF6", "RhoG7", "SigmaH8", "TauI9", "UpsilonJ0",
];

export async function GET() {
  return NextResponse.json({ items: [...STRINGS], total: STRINGS.length });
}
