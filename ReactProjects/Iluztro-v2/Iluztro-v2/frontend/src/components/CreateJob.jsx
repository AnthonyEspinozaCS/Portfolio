import { useEffect, useState } from "react";
import { useCreateNew } from "../hooks/useCreateNew";
import { JobSelect } from "./JobSelect";
import { JobType } from "./JobType";
import { splitName } from "../utils/utils";

import plus from "../assets/images/plus.svg";
import arrow from "../assets/images/triangle.svg";

export const CreateJob = ({ users = [] }) => {
  const [selectUser, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const [toggleNew, setToggle] = useState(false);
  const [jobType, setType] = useState("");
  const [jobStatus, setStatus] = useState("");
  const { error, isLoading, createNewUser, createNewJob } = useCreateNew();

  useEffect(() => {
    if (users) setUser(users[0]);
  }, [users]);

  const handleClick = () => {
    setToggle(!toggleNew);
  };

  const handleStatus = (status) => {
    setStatus(status);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const handleType = (type) => {
    setType(type);
  };

  return (
    <div className="menubar--container">
      <button className="menubar--button">
        <img
          src={plus}
          alt="A plus sign."
        />
      </button>

      <div className="blurred-background"></div>
      <div className="create-job">
        <h2>Create a New Job</h2>
        <div className="create__toolbar">
          <select
            name="all-users"
            id="pickUser"
            className="create__select"
            onChange={(e) => {
              setUser(users[e.target.value]);
            }}>
            {users &&
              users.map((user, index) => {
                return (
                  <option
                    key={user.user_id}
                    value={index}>
                    {user.first_name}
                  </option>
                );
              })}
          </select>
          <div className="create__search">
            <label>Search for user:</label>
            <input
              type="text"
              onChange={(e) => {
                setSearchBar(e.target.value);
                console.log(searchBar);
              }}
              value={searchBar}
            />
            <div className="search__results">
              {searchBar &&
                users
                  .filter((user) => user.first_name.toLowerCase().includes(searchBar.toLowerCase()))
                  .map((user) => {
                    return (
                      <div
                        key={user.user_id}
                        className="result">
                        {user.first_name}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <div className="create__new">
          <div className="create__bar">
            <h3>New User</h3>
            <button
              className={toggleNew ? "create__button toggled" : "create__button"}
              onClick={handleClick}>
              <img
                src={arrow}
                alt="Blue Arrow."
              />
            </button>
          </div>
          <div className={toggleNew ? "create__dropdown extended" : "create__dropdown"}>
            <form
              onSubmit={handleSubmit}
              className="create__form fs-medium">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label>Company:</label>
                <input
                  type="text"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {error && <div className="error text-white">{error}</div>}
            </form>
          </div>
          <div className="create__job fs-medium">
            <div>
              <label>Job Type:</label>
              <JobType onChange={handleType} />
            </div>
            <div>
              <label>Job Status:</label>
              <JobSelect
                job={null}
                onChange={handleStatus}
              />
            </div>
          </div>
          <div className="create__preview">
            <h2>User:</h2>
            {toggleNew && (
              <>
                <label>Name:</label>
                <p>{name}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
