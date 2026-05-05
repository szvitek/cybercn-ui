import { readFile } from "node:fs/promises";
import path from "node:path";

import type { Registry } from "shadcn/schema";

import registry from "@/registry.json";

const registryData = registry as Registry;

export function getRegistry() {
  return registryData;
}

export function getRegistryItem(name: string) {
  return registryData.items.find((item) => item.name === name) ?? null;
}

export async function buildRegistryItemPayload(name: string) {
  const item = getRegistryItem(name);

  if (!item) {
    return null;
  }

  const filesWithContent = await Promise.all(
    (item.files ?? []).map(async (file) => {
      const absolutePath = path.join(process.cwd(), file.path);
      const content = await readFile(absolutePath, "utf8");

      return {
        ...file,
        content,
      };
    }),
  );

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...item,
    files: filesWithContent,
  };
}
