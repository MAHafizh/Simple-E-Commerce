/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
        <div>
          <h1>Manage Profile</h1>
          <div className="w-1/4 flex flex-col items-center -ml-10 mt-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-300 mb-4">
              <img
                src="/path-to-profile-image.jpg" // Ganti dengan URL photo profil user
              />
            </div>

            <label
              htmlFor="profilePic"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600"
            >
              Change Photo
            </label>
            <input
              disabled={isDisabled}
              type="file"
              id="profilePic"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  // handle file upload logic here
                  console.log(file.name);
                }
              }}
            />
          </div>
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
        </div>
        <div className="mt-4">
          <h1>Manage Password</h1>
          <div className="flex justify-between space-x-4 mt-4 mb-4">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="email3" value="Current Password" />
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
                <Label htmlFor="email3" value="New Password" />
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
      </div>
      <div className="flex gap-4">
        <Button color="warning" className="mt-4 w-25" onClick={handleEdit}>
          Ubah
        </Button>
        <Button color="success" className="mt-4 w-25" onClick={handleSimpan}>
          Simpan
        </Button>
        <Button color="failure" className="mt-4 w-25" onClick={handleSimpan}>
          Hapus Akun
        </Button>
      </div>
    </>
  );
};

export default InputProfile;
