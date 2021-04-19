import { getAddress } from "@ethersproject/address";

export const isAddress = (value: any): string | false => {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
};

export const getShortAddress = (address: string, chars = 4): string => {
  const parsed = isAddress(address);

  if (!parsed) {
    throw Error(`Invalid 'address' parameter`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
};
