import type { FC } from "react";

import { helloStore } from "@/contexts";

const Content: FC = () => {
  const { text, setText } = helloStore();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Content</h1>
      <h2>Store</h2>
      <p>{text}</p>
      <p>{text.length}</p>
      <input className="input" onChange={(e) => handleChange(e)} value={text} />
    </div>
  );
};

export default Content;
