"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // const page = searchParams.get("page") || 1;
  // NOTE: underline my concept
  const page = searchParams.get("page") * 1 || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  // const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  // const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;
  // NOTE: underline 2 lines my concept
  const hasPrev = page - 1 ? page - 1 : null;
  const hasNext = page + 1 <= Math.ceil(count / ITEM_PER_PAGE) ? page + 1 : null;

  const handleChangePage = (type) => {
    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>
        Previous
      </button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
