import { useState, ChangeEvent, FormEvent } from "react";
import { searchUsers } from "../../store/Github/github.actions";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/Github/github.actions";
import { selectUsers } from "../../store/Github/github.selector";
import { clearUsers } from "../../store/Github/github.actions";

const UserSearch = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text === "") {
      dispatch(setAlert("Please write something"));
    } else {
      searchUsers(dispatch, text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:mb-12">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 text-black bg-gray-200 input input-lg"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => clearUsers(dispatch)}
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
