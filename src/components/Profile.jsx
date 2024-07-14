import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";

const Profile = () => {
  const avatarUrl = useRef(
    "https://miro.medium.com/v2/resize:fit:480/1*n3bi635V0KTH0SdUjpTm-w.jpeg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[200px] h-[200px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      <h2 className="text-white font-bold mt-6">Catman</h2>
      <p className="text-white text-s mt-2">Cat Enthusiast</p>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
