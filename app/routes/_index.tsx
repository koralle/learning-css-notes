import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { rootStyle } from "../styles/global.css"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Leaning CSS Notes" }, { name: "description", content: "This is `Leaning CSS Notes`" }];
};

export default function Index() {
  return (
    <h1 className={rootStyle}>Leaning CSS Notes</h1>
  );
}
