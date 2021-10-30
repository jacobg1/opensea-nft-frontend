import { ChangeEvent } from "react";

export type SelectChange = ChangeEvent<HTMLSelectElement>;
export type InputChange = ChangeEvent<HTMLInputElement>;

export interface PayloadFilters {
  order_direction: string;
  offset: string;
  limit: string;
}
