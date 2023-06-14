import ReposItem from "./ReposItem";
import Spinner from "../layout/Spinner";
import { Repos } from "../../utils/types";

export type ReposListProps = {
  repos: Repos[];
};

const ReposList = ({ repos }: ReposListProps) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="my-4 text-3xl font-bold card-title">Top Repositories</h2>
        {repos.length > 0 ? (
          repos.map((repo) => <ReposItem key={repo.id} repo={repo} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ReposList;
