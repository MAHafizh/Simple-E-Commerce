"use client";
import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

const InputProfile = () => {
  const [isDisabled, setIsDisableb] = useState(true);

  const handleEdit = () => {
    setIsDisableb(false);
  };

  const handleSimpan = () => {
    setIsDisableb(true);
  };
  return (
    <>
      <div>
        <h1>Your Profile</h1>
        <div className="flex justify-between space-x-4 mt-4 mb-4">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="First Name" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="Last Name" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="flex justify-between space-x-4 mt-4">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="Email" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="Phone Number" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="flex justify-between space-x-4 mt-4">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="Your email" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="email3" value="Your email" />
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              className="w-full"
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button color="warning" className="mt-4 w-20" onClick={handleEdit}>
          Ubah
        </Button>
        <Button color="success" className="mt-4 w-20" onClick={handleSimpan}>
          Simpan
        </Button>
      </div>
    </>
  );
};

export default InputProfile;
