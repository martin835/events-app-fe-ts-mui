export default interface MainFilter {
  month: number;
  startDate?: Date;
  endDate?: Date;
  category: Categories;
  searchString?: string;
}

export interface Categories {
  theatre: boolean;
  movie: boolean;
  musical: boolean;
  concert: boolean;
}
