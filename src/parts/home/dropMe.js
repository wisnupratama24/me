import React from "react";
import { Logo } from "../../components";

export default function DropMe({ text, src }) {
  return (
    <div className='bg-gray-100 dark:bg-black-100 px-8 py-4 flex m-2 drop-me'>
      <Logo.DropMe logo={src} alt={text} />
      <p className='ml-4 dark:text-gray-100'>{text}</p>
    </div>
  );
}
