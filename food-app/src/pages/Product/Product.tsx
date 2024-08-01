import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Product = () => {
  const data = useLoaderData();

  return (
    <>
      <Suspense fallback={"Загружаю"}>
        <Await resolve={data.data} errorElement={<>Ошибка загрузки</>}>
          {({ data }: { data }) => <h1>{data.name}</h1>}
        </Await>
      </Suspense>
    </>
  );
};

export default Product;
