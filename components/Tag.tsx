import React from "react";

interface ITagProps {
  text: string;
}

const Tag = (props: ITagProps) => {
  const { text } = props;

  return (
    <div className="flex justify-center items-center bg-tagBg text-subtitleColor rounded-xl px-6 py-1 text-sm">
      {text}
    </div>
  );
};

export default Tag;
