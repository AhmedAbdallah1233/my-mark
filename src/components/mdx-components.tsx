import { useMDXComponent } from "next-contentlayer2/hooks";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface MdxProps {
  code: string;
}
const components = {
  h1: ({ ...props }) => (
    <h1
      className={"mt-2 text-4xl font-bold tracking-tight text-red-300"}
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className={"mt-10 pb-1 text-3xl font-simibold tracking-tight"}
      {...props}
    />
  ),
};

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
}
