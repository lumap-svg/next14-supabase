"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Linker() {
  const router = useRouter();
  return (
    <IoArrowBackOutline
      onClick={() => router.back()}
      className="text-2xl ml-4 mt-2"
    />
  );
}
