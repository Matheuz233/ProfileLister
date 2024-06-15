import { useQuery } from "react-query";
import { useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { getUsersPage } from "../../api/axios";
import Filter from "../../components/Filter/Filter";

import styles from "./Home.module.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  const {
    isLoading,
    isError: queryError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(["users", page], () => getUsersPage(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading Users...</p>;

  if (queryError) return <p>Error: {error.message}</p>;

  // Aplicar filtros aos usuários
  const filteredUsers = users.data.filter((user) => {
    const nameMatch = user.first_name
      .toLowerCase()
      .includes(appliedFilters.name.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(appliedFilters.email.toLowerCase());
    const lastNameMatch = user.last_name
      .toLowerCase()
      .includes(appliedFilters.lastName.toLowerCase());

    return nameMatch && emailMatch && lastNameMatch;
  });

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
    setPage(1);
  };

  const firstPage = () => setPage(1);
  const lastPage = () => setPage(users.total_pages);

  const pagesArray = Array.from(
    { length: users.total_pages },
    (_, index) => index + 1
  );

  return (
    <div>
      <Filter onApplyFilters={handleApplyFilters} />

      <nav className={styles.navigator}>
        <button onClick={firstPage} disabled={isPreviousData || page === 1}>
          &lt;&lt;
        </button>

        {pagesArray.map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            disabled={isPreviousData}
          >
            {pg}
          </button>
        ))}

        <button
          onClick={lastPage}
          disabled={isPreviousData || page === users.total_pages}
        >
          &gt;&gt;
        </button>
      </nav>

      {isFetching && <span className="loading">Loading...</span>}

      <div className={styles.cards}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
