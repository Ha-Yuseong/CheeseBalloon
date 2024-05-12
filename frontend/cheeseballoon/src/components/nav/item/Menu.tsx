"use client";

import OpenMenu from "src/components/nav/item/openIndex";
import ClosedMenu from "src/components/nav/item/closedIndex";
import useToggleState from "src/stores/store";

export default function Menu() {
  const { value } = useToggleState();
  // 승민이형 허락
  if (window.location.pathname === "/login") return null;
  return <div>{value ? <OpenMenu /> : <ClosedMenu />}</div>;
}
