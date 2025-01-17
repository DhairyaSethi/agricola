import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { UseAuthenticationContext } from "../../context/AuthenticationContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, MenuItem, Menu as MaterialUIMenu } from "@mui/material";
import { USER_PROFILE } from "../../utilities/constants";
import { ACTIONS } from "../../reducers/AuthenticationReducer";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Lender", href: "#", current: false },
  { name: "Staker", href: "#", current: false },
  { name: "Borrower", href: "#", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { userState, userDispatch } = UseAuthenticationContext();
  const openModal = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    localStorage.removeItem("metamask-account");
    localStorage.removeItem("accessToken");
    userDispatch({
      type: ACTIONS.LOGOUT,
    });
  };
  return (
    <Disclosure as="nav" className="bg-neutral-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <Button
                    id="basic-button"
                    aria-controls={openModal ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openModal ? "true" : undefined}
                    onClick={handleClick}
                  >
                    View As
                  </Button>
                  <MaterialUIMenu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openModal}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link to="/lend" onClick={handleClose}>
                      <MenuItem>
                        <p className="block px-4 py-2 font-medium text-sm text-gray-700">
                          Lender
                        </p>
                      </MenuItem>
                    </Link>
                    <Link to="/stake" onClick={handleClose}>
                      <MenuItem>
                        <p className="block px-4 py-2 font-medium text-sm text-gray-700">
                          Stake
                        </p>
                      </MenuItem>
                    </Link>
                    <Link to="/borrow" onClick={handleClose}>
                      <MenuItem>
                        <p className="block px-4 py-2 font-medium text-sm text-gray-700">
                          Borrow
                        </p>
                      </MenuItem>
                    </Link>
                  </MaterialUIMenu>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative mr-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-14 w-14 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 z-10 mt-1.5 w-48 origin-top-right rounded-md bg-white py-1 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                      //   style={{
                      //     boxShadow:
                      //       "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px",
                      //   }}
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={USER_PROFILE.PROFILE_PATH}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                            onClick={logoutHandler}
                          >
                            Log Out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-8 w-8" aria-hidden="true" />
                </button> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
