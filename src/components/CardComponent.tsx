"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { MdOutlineEdit, MdDeleteForever } from "react-icons/md";
import { Button } from "./ui/button";
import { Smoothie } from "@/lib/definitions";
import { Badge } from "./ui/badge";
import { deleteRecipe } from "@/lib/actions";

interface ComponentProps {
  res: Smoothie;
}

export default function CardComponent({ res }: ComponentProps) {
  //   function deleterecipe() {
  //     console.log("deleting recipe");
  //   }
  const deleterecipe = deleteRecipe.bind(null, String(res.id));
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-col justify-between ">
        <h2 className="font-bold">{res.title}</h2>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold underline">Preparation Method:</h4>
        <p className="line-clamp-3"> {res.method}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"destructive"}>view </Button>
        <div className="flex gap-3">
          <Link href={`edit/${res.id}`}>
            <MdOutlineEdit className="text-xl" />
          </Link>
          <MdDeleteForever className="text-xl" onClick={() => deleterecipe()} />
          <Badge variant={"outline"}>rating: {res.rating}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
}
