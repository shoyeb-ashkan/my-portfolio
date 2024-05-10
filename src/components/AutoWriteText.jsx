import Typewriter from "typewriter-effect";
import { UserData } from "../data/UserData";

function AutoWriteText() {
  const { typewriterOptions } = UserData;
  return <Typewriter options={typewriterOptions} />;
}

export default AutoWriteText;
