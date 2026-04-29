import { NextResponse } from "next/server";

import { getRegistry } from "@/lib/registry";

export async function GET() {
  return NextResponse.json(getRegistry());
}
