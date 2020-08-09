export type SystemUserAddressProtocol = { street: string; number: number };

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
