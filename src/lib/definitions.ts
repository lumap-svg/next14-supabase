export interface Smoothie {
  id: number;
  created_at: string;
  title: string;
  method: string;
  rating: number;
}
export type smoothieData = {
  data: Smoothie[];
};

export type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};
