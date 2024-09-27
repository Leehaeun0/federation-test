import { atom, useAtom } from 'jotai';

const countAtom = atom(0); // atom은 state 조각을 표현

const useCount = () => useAtom(countAtom); // useState 사용과 비슷하게 useAtom을 사용

export default useCount;
