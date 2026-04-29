import { NextResponse } from "next/server";

import { buildRegistryItemPayload } from "@/lib/registry";

type RouteParams = {
  params: Promise<{
    component: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  const { component } = await params;
  const componentName = component.endsWith(".json")
    ? component.slice(0, -".json".length)
    : component;
  const payload = await buildRegistryItemPayload(componentName);

  if (!payload) {
    return NextResponse.json(
      {
        error: `Registry item "${componentName}" not found.`,
      },
      { status: 404 },
    );
  }

  return NextResponse.json(payload);
}
