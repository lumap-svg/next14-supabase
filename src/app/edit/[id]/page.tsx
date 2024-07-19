import EditForm from "@/components/EditForm";
import Linker from "@/components/Linker";
import { singleSmothy } from "@/lib/actions";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const result = await singleSmothy(Number(params.id));
  // console.log(result);
  return (
    <>
      <Linker />
      <div className="flex justify-center items-center h-[80vh] overflow-y-scroll">
        {typeof result === "string" && <div> {result}</div>}
        {typeof result !== "string" && typeof result !== "undefined" && (
          <EditForm result={result} />
        )}
      </div>
    </>
  );
}
