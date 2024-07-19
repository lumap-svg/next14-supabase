"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { Smoothie } from "./definitions";
import { supabase } from "./supabaseConfig";
import { redirect } from "next/navigation";

export const fetchRecords = async (): Promise<
  Smoothie[] | string | undefined
> => {
  const { data, error } = await supabase.from("smoothies").select();
  if (error) {
    const errMsg: string = error.message;
    console.log(errMsg);
    return error.message;
  }
  if (data) {
    const Dta: Smoothie[] = data;

    return Dta;
  }
};
export const singleSmothy = async (
  id: number
): Promise<Smoothie | string | undefined> => {
  const { data, error } = await supabase
    .from("smoothies")
    .select()
    .eq("id", id)
    .single();
  if (data) return data;
  if (error) return error.message;
};

const createSmothySchema = z.object({
  title: z.string(),
  method: z.string(),
  rating: z.string(),
});

export const createSmoty = async (formData: FormData) => {
  const { title, method, rating } = createSmothySchema.parse({
    title: formData.get("title"),
    method: formData.get("method"),
    rating: formData.get("rating"),
  });

  console.log(typeof title, typeof method, typeof rating);
  if (title && method && rating) {
    const { data, error } = await supabase
      .from("smoothies")
      .insert({
        title: title,
        method: method,
        rating: rating,
      })
      .select();
    if (data) console.log(data);
    if (error) console.log(error);
    revalidatePath("/");
    redirect("/");
  }
};
export const editForm = async (id: string, formData: FormData) => {
  const { title, method, rating } = createSmothySchema.parse({
    title: formData.get("title"),
    method: formData.get("method"),
    rating: formData.get("rating"),
  });
  // console.log(`title: ${title}, method : ${method}, rating : ${rating}`);
  console.log(id);
  const { data, error } = await supabase
    .from("smoothies")
    .update({ title, method, rating })
    .eq("id", id)
    .select();

  if (error) console.log(error);
  if (data) {
    revalidatePath("/edit/");
    redirect("/");
  }
};

export const deleteRecipe = async (id: string) => {
  const { data, error } = await supabase
    .from("smoothies")
    .delete()
    .eq("id", id)
    .select();
  if (data) {
    revalidatePath("/");
  }
  if (error) console.log(error);
};
