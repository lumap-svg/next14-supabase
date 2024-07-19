import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { fetchRecords } from "@/lib/actions";
import { Smoothie } from "@/lib/definitions";

export default async function Home() {
  const result: Smoothie[] | string | undefined = await fetchRecords();

  return (
    <main className="max-w-6xl mx-auto py-2 flex flex-col items-center">
      <div>
        {/* <Button className="mr-2 my-2" variant={"outline"}>
          Create At
        </Button>
        <Button className="mr-2 my-2" variant={"outline"}>
          Title
        </Button>
        <Button className="mr-2 my-2" variant={"outline"}>
          Rating
        </Button> */}
      </div>
      <div className="grid sm:grid-cols-3 sm:gap-8 px-1">
        {result instanceof Array &&
          result.map((res: Smoothie) => (
            <CardComponent key={res.id} res={res} />
          ))}
      </div>
      {typeof result === "string" && (
        <div className="h-40 w-fit bg-red-300 px-3 text-center mt-10 rounded-lg flex  flex-col justify-center">
          <h2 className="font-bold">Warning !!!! </h2>
          {result}
        </div>
      )}
    </main>
  );
}
