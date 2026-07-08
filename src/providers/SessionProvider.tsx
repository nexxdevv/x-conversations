"use client";

import {
  ReactNode,
} from "react";

import {
  authClient,
} from "@/lib/auth-client";


interface Props {
  children: ReactNode;
}


export default function SessionProvider({
  children,
}: Props) {

  const {
    data: session,
    isPending,
  } = authClient.useSession();


  return (
    <>
      {children}
    </>
  );
}