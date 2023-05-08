import { API_URL } from "@/envrironment/environment";
import type { CreateTradeModel, Trade } from "@/model/Trade";
import axios from "axios";
import { trades } from "./QuickUserModalService";

export async function createTrade(
  createTradeModel: CreateTradeModel
): Promise<Trade> {
  const { data } = await axios.post<Trade>(
    API_URL + "/trade",
    createTradeModel
  );
  return data;
}

export async function getTrades(): Promise<Trade[]> {
  const { data } = await axios.get<Trade[]>(API_URL + "/trade");
  return data;
}

export async function reloaddTrades() {
  const { data } = await axios.get<Trade[]>(API_URL + "/trade");
  trades.value = data;
}

export async function getTradesByUser(userId: number): Promise<Trade[]> {
  const { data } = await axios.get<Trade[]>(API_URL + "/trade/" + userId);
  return data;
}

export async function getTradesByServerIp(serverIpAddress: number): Promise<Trade[]> {
  const { data } = await axios.get<Trade[]>(API_URL + "/trade/" + serverIpAddress);
  return data;
}

export async function deleteTrade(tradeId: number): Promise<Trade> {
  const { data } = await axios.delete<Trade>(API_URL + "/trade/" + tradeId);
  return data;
}
