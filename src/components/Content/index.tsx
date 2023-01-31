import type { FC } from "react";

import { useStore } from "@nanostores/react";

import { hello } from "@/contexts";

const Content: FC = () => {
  const helloAtom = useStore(hello.atom);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    hello.atom.set(e.target.value);
  }

  return (
    <div>
      <h1>Content</h1>
      <h2>Store</h2>
      <p>{helloAtom}</p>
      <p>{helloAtom.length}</p>
      <input
        className="input"
        onChange={(e) => handleChange(e)}
        value={helloAtom}
      />
    </div>
  );
};

export default Content;
