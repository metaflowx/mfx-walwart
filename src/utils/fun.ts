export function sortAddress(add:string) {
    const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add.length - 4)}`;
    return sortAdd;
  }
  export function sortAddressDoc(add:string) {
    const sortAdd = `${add?.slice(0, 3)}****${add?.slice(add.length - 3)}`;
    return sortAdd.toUpperCase();
  }