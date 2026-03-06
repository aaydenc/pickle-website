import type React from "react";

type BulletItemProps = {
  children: React.ReactNode;
};

export default function BulletItem({ children }: BulletItemProps) {
  return (
    <>
      <li className="flex gap-2 my-2">
        <span>•</span>
        <span>{children}</span>
      </li>
    </>
  );
}
