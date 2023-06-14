import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/Github/github.actions";
import { useEffect } from "react";
import { selectAlertError } from "../../store/Github/github.selector";

const Alert = () => {
  const alertError = useSelector(selectAlertError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alertError !== null) {
      setTimeout(() => {
        dispatch(setAlert(null));
      }, 4000);
    }
  }, [alertError, dispatch]);

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
      style={{ visibility: alertError ? "visible" : "hidden" }}
    >
      <div className="alert alert-error">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-3 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <strong>{alertError}</strong>
        </div>
      </div>
    </div>
  );
};

export default Alert;
