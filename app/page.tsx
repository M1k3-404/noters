"use client"
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Notes from "./notes/page";


export default function Home() {
  return (
    <NextUIProvider className="w-full h-full">
      <Notes />
    </NextUIProvider>
  )
}
