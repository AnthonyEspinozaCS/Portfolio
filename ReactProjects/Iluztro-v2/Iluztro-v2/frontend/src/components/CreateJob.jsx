import { useEffect, useState } from "react";
import { useCreateNew } from "../hooks/useCreateNew";
import { JobSelect } from "./JobSelect";
import { JobType } from "./JobType";
import { splitName } from "../utils/utils";

import plus from "../assets/images/plus.svg";
import refresh from "../assets/images/update.svg";
import arrow from "../assets/images/triangle.svg";
import x from "../assets/images/x.svg";

export const CreateJob = ({ users = [], onClick }) => {
  const [selectUser, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const [toggleCreate, setCreate] = useState(false);
  const [toggleNew, setToggle] = useState(false);
  const [jobType, setType] = useState("Logo");
  const [jobStatus, setStatus] = useState("Consult");
  const [paymentURL, setPaymentURL] = useState("");
  const { createNewUser, createNewJob, error, isLoading } = useCreateNew();

  useEffect(() => {
    if (users) setUser(users[0]);
  }, [users]);

  const handleCreate = () => {
    setCreate(!toggleCreate);
  };

  const checkKeypress = (e) => {
    console.log(e.key);
    if (e.key === "Escape") handleCreate();
  };

  const handleClick = () => {
    setToggle(!toggleNew);
  };

  const handleStatus = (status) => {
    setStatus(status);
  };

  const handleSubmit = async () => {
    if (!Object.hasOwn(selectUser, "user_id")) {
      const user = await createNewUser(selectUser.first_name, selectUser.last_name, selectUser.company, selectUser.email, selectUser.password).then(async (user) => {
        const job = await createNewJob(user.user_id, jobStatus, jobType, paymentURL);
      });
    } else {
      const job = await createNewJob(selectUser.user_id, jobStatus, jobType, paymentURL);
    }
  };

  const handleType = (type) => {
    setType(type);
  };

  const handleSearchChosen = (user) => {
    setUser(user);
    setSearchBar("");
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const { first_name, last_name } = splitName(name);
    setUser({
      first_name: first_name,
      last_name: last_name,
      company: company,
      email: email,
      password: password,
    });
  };

  return (
    <div className="menubar--container">
      <button
        onClick={handleCreate}
        className="menubar--button">
        <img
          src={plus}
          alt="A plus sign."
        />
      </button>
      {toggleCreate && (
        <>
          <div
            className="blurred-background"
            onClick={handleCreate}
            onKeyDown={checkKeypress}
            tabIndex="0"></div>
          <div
            className={toggleNew ? "create-job translate-down" : "create-job"}
            onKeyDown={checkKeypress}
            tabIndex="0">
            <div className="create__header">
              <h3>Create a New Job</h3>
              <button
                className="menubar--button"
                onClick={handleCreate}>
                <img
                  src={x}
                  alt="Arrows spinning."
                  className="menubar--button-sml"
                />
              </button>
            </div>
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
                            onClick={() => {
                              handleSearchChosen(user);
                            }}
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
                  <button
                    className="menubar--button"
                    onClick={updateUser}>
                    <img
                      src={refresh}
                      alt="Arrows spinning."
                    />
                  </button>
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
                <div>
                  <label>Payment URL:</label>
                  <input
                    type="text"
                    onChange={(e) => setPaymentURL(e.target.value)}
                    value={paymentURL}
                  />
                </div>
              </div>
            </div>
            <div className="create__preview">
              <h3>User:</h3>
              {selectUser && <p>{`${selectUser.first_name} ${selectUser.last_name}, ${selectUser.company}, ${selectUser.email}`}</p>}
              <h3>Job:</h3>
              <p>{`Type: ${jobType} Status: ${jobStatus}`}</p>
            </div>
            <button
              onClick={handleSubmit}
              className="menubar--button">
              <img
                src={plus}
                alt="A plus sign."
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
