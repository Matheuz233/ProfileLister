import { useQuery } from "react-query";
import { useState } from "react";
import { getUsersPage } from "../../api/axios";

import UserCard from "../../components/UserCard/UserCard";
import Filter from "../../components/Filter/Filter";

import styles from "./Home.module.css";

const Home = () => {
  const [appliedFilters, setAppliedFilters] = useState({
    name: "",
    email: "",
    lastName: "",
  });

  const {
    isLoading: usersLoading,
    isError: usersError,
    error: usersErrorMessage,
    data: combinedUsersData,
    isFetching: isUsersFetching,
  } = useQuery(["combinedUsers", 1], async () => {
    const page1 = await getUsersPage(1);
    const page2 = await getUsersPage(2);
    const combinedUsers = [...page1.data, ...page2.data];
    return combinedUsers;
  });

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const filteredUsers =
    combinedUsersData?.filter((user) => {
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
    }) || [];

  return (
    <div>
      <Filter onApplyFilters={handleApplyFilters} />
      {usersError && (
        <div className={styles.error_container}>
          <h1 className={styles.errorMessage}>{usersErrorMessage.message}</h1>
        </div>
      )}

      {usersLoading && isUsersFetching ? (
        <div className={styles.spinner_container}>
          <img src="./spinner.gif" alt="Loading" className={styles.spinner} />
        </div>
      ) : (
        <div className={styles.cards}>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
