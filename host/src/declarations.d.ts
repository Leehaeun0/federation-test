declare module 'remoteApp/Button' {
  const Button: React.ComponentType;
  export default Button;
}

declare module 'remoteApp/store/countStore' {
  const countStore: () => [
    number,
    SetAtom<[React.SetStateAction<number>], void>
  ];
  export default countStore;
}
