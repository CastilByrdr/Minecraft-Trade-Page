import type { CreateServerModel, Server } from "@/model/ServerModel";
import { server, servers } from "@/state/server";
import axios from "axios";
//const util = require('mc-server-util');
import { LocalStorage } from "./LocalStorageService";

const API_URL = "http://localhost:3000";

export enum AuthError {
    InvalidServerIpAddress = "Invalid Ip Address: Please confirm the server address is correct and the server is currently running",
  }

export async function getAllServers(): Promise<Server[]> {
  const { data } = await axios.get<Server[]>(API_URL + "/server");
  return data;
}

export async function getServer(id: number): Promise<Server[]> {
  const { data } = await axios.get<Server[]>(`${API_URL}/server/${id}`);
  return data;
}

export async function findServer(ipAddress: number): Promise<Server[]> {
  const { data } = await axios.get<Server[]>(`${API_URL}/server/${ipAddress}`);
  return data;
}

export async function reloadServers() {
  const { data } = await axios.get<Server[]>(API_URL + "/server");
  servers.value = data;
}

/*export const AuthApi = {
  async login(loginModel: ConnectModel): Promise<Server> {
    const { data } = await axios.post<Server>(API_URL + "/login", loginModel);
    return data;
  },

  async logout(userId: number) {
    const { data } = await axios.post<Server>(`${API_URL}/logout/${userId}`);
    return data;
  },
};

export const AuthServer = {
  async connect(ipAddress: string, name: string) {
    const { data } = await axios.post<Server>(API_URL + "/login", );
    return data;
    //server.value = await AuthApi.login({ ipAddress, name });
    //LocalStorage.setCurrentUser(user.value);
  },
  async disconnect(userId: number) {
    await AuthApi.logout(serverId);
    server.value = null;
    LocalStorage.removeCurrentUser();
  },
};*/

export function registerServer(createServerModel: CreateServerModel): Promise<Server> {
    return createServer(createServerModel);
  }

export async function createServer(
  createServerModel: CreateServerModel
): Promise<Server> {
  const { data } = await axios.post<Server>(API_URL + "/server", createServerModel);
  return data;
}

export async function deleteServer(id: number): Promise<Server> {
  const { data } = await axios.delete<Server>(`${API_URL}/server/${id}`);
  return data;
}

export async function addServer(ipAddress: string) {
    
  }

/*export function getIpErrors(ipAddress: string) {
    // checks if server is an active server using mc-server-util
    if (!util.status(ipAddress)) {
      return { InvalidServerIpAddress: true };
    }
    return null;
  }*/