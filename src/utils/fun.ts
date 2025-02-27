export function sortAddress(add:string) {
    const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add.length - 4)}`;
    return sortAdd;
  }
  export function sortAddressDoc(add:string) {
    const sortAdd = `${add?.slice(0, 3)}****${add?.slice(add.length - 3)}`;
    return sortAdd.toUpperCase();
  }

  export const handleNegativeValue = (event:any) => {
    const {
      key,
      target: { value, selectionStart },
    } = event;
    const newValue =
      value.slice(0, selectionStart) + value.slice(selectionStart + 1);
    const parsedValue = parseFloat(newValue);
    if (
      ["ArrowUp", "ArrowDown", "-", "+", "e", "E"].includes(key) &&
      (isNaN(parsedValue) || parsedValue < 0)
    ) {
      event.preventDefault();
    }
  };

  export const handleMouseScroll = (event:any) => {
    const input = event.target;
    const value = parseFloat(input.value);
  
    // Check if the scroll would result in a negative value
    if (!isNaN(value) && value <= 0 && event.deltaY < 0) {
      event.preventDefault();
    }
  };