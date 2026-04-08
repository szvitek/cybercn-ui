import { BoxTree } from "@/components/ui/cybercn/boxtree";
import boxtreeData from "@/data/boxtree-content.json";

type BoxDataItem = {
  id: number;
  title: string;
  content: string;
  status: "default" | "resolved" | "pending";
  width: "full" | "half" | "quarter";
  childrenCount: 0 | 1 | 2;
};

export function BoxTreeComponent() {
  return (
    <BoxTree>
      {(boxtreeData as BoxDataItem[]).map((item) => (
        <BoxTree.Box
          key={item.id}
          title={item.title}
          status={item.status}
          width={item.width}
          childrenCount={item.childrenCount}
        >
          {item.content}
        </BoxTree.Box>
      ))}
    </BoxTree>
  );
}
