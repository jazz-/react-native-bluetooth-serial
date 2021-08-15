import * as React from "react";
import * as ReactNative from "react-native";

export interface IDevice {
  name: string;
  id: string;
}

export type Buffer = (data: number[]) => void;

export namespace BluetoothSerial {
  function on(eventName: string, handler: () => void): void;
  function removeListener(eventName: string, handler: () => void): void;
  function write(data: Buffer | string): Promise<boolean>;
  function read(): Promise<Buffer | string>;
  function list(): Promise<IDevice[]>;
  function isEnabled(): Promise<boolean>;
  function connect(id: string): Promise<void>;
  function disconnect(): Promise<void>;
  function isConnected(): Promise<boolean>;
  function pairDevice(deviceId: string): Promise<boolean>;
  function discoverUnpairedDevices(): Promise<IDevice[]>;
  function requestEnable(): Promise<void>;
  function enable(): Promise<void>;
  function disable(): Promise<void>;
  function cancelDiscovery(): Promise<void>;
}
