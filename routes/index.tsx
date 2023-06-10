import { Head } from "$fresh/runtime.ts";
import Generator from "../islands/Generator.tsx";
import {
  MdAccountCircle,
  MdAddPhotoAlternate,
} from "https://deno.land/x/react_icons@0.2.3/md/mod.ts";
import {
  FluentProvider,
  webLightTheme,
  Select
} from "npm:@fluentui/react-components";

export default function Home() {
  return (
    <div className="h-full bg-white">
      <Head>
        <title>Password Generator</title>
      </Head>
      <Generator></Generator>
    </div>
  );
}
