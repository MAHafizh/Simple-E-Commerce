import React from "react";

import Menu from "../menu";

const items1 = [
  { label: "My Profile", link: "/account" },
  { label: "My Address", link: "/account/address" },
  { label: "My Payment Option", link: "" },
];

const items2 = [
  { label: "My Returns", link: "" },
  { label: "My Cancellations", link: "" },
];

const MenuAccount = () => {
  return (
    <>
      <Menu title="My Account" items={items1} />
      <Menu title="My Orders" items={items2} />
    </>
  );
};

export default MenuAccount;
