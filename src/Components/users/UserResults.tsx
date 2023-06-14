import { useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import { getRandomUsers } from "../../store/Github/github.actions";
import { useDispatch, useSelector } from "react-redux";
import { UsersType } from "../../utils/types";
import { selectState } from "../../store/Github/github.selector";

const UserResults = () => {
  const dispatch = useDispatch();

  const { users, isLoading } = useSelector(selectState);

  useEffect(() => {
    getRandomUsers(dispatch);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user: UsersType) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserResults;
