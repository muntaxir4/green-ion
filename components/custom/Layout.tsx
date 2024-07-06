"use client";

import { RecoilRoot } from "recoil";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
