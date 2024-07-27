"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="mt-16 text-center">
      <div>Page Not Found</div>
      <Button
        className="mt-3"
        variant="outline"
        onClick={() => router.push("/")}
      >
        Go Back To Homepage
      </Button>
    </div>
  );
}
