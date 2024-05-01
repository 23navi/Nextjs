"use client";

export default function ShareLinkButton() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <button
      onClick={handleClick}
      className=" text-md text-black-200 border border-solid rounded-md hover:rounded-lg border-orange-700"
    >
      Share
    </button>
  );
}
