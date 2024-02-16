import { useTypewriter } from "react-simple-typewriter";

export function useWriter(word){
  const [text] = useTypewriter({
    words: [word],
    loop: {},
  });
  return {text}
}