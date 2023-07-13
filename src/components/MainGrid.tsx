import { MovieItem as MovieItemType } from "@/types/movie";
import { FC } from "react";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";

interface MainGridProps {
  title: string;
  isLoading: boolean;
  list: MovieItemType[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MainGrid: FC<MainGridProps> = ({
  title,
  isLoading,
  list,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <main className="min-h-screen">
      <div className="max-w-full mx-5 xl:max-w-[1280px] xl:mx-auto py-20">
        <div className="flex items-center justify-between">
          <h1 className="my-4 text-3xl font-black">{title}</h1>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
        {isLoading && <h1>Loading.......</h1>}
        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
          {list &&
            list.map((item: MovieItemType, key) => (
              <MovieItem movie={item} key={key} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default MainGrid;
