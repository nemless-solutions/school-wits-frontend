/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosBody } from "../../types";

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`;

// GET method (from default baseurl)
export function useGet(uri: string, options?: AxiosRequestConfig) {
  const {
    data,
    refetch,
    error: fetchError,
    isError,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: [uri],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/${uri}`, {
        ...options,
        withCredentials: true,
      });
      return res.data;
    },
  });

  return { data, refetch, fetchError, isError, isSuccess, isPending };
}

// GET method (from other baseurl)
export function useExtenralGet(url: string, options?: AxiosRequestConfig) {
  const {
    data,
    refetch,
    error: fetchError,
    isError,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await axios.get(url, {
        ...options,
      });
      return res.data;
    },
  });

  return { data, refetch, fetchError, isError, isSuccess, isPending };
}

// POST method
export function usePost(uri: string, options?: AxiosRequestConfig) {
  const {
    data,
    mutate,
    error: fetchError,
    isError,
    isSuccess,
    isPending,
  }: UseMutationResult<any, AxiosError, AxiosBody> = useMutation({
    mutationKey: [uri],
    mutationFn: async (body: AxiosBody) => {
      const res = await axios.post(`${baseUrl}/${uri}`, body, {
        ...options,
        withCredentials: true,
      });
      return res.data;
    },
  });

  return { data, mutate, fetchError, isError, isSuccess, isPending };
}

// PUT method
export function usePatch(uri: string, options?: AxiosRequestConfig) {
  const {
    data,
    mutate,
    error: fetchError,
    isError,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: async (body: AxiosBody) => {
      const res = await axios.patch(`${baseUrl}/${uri}`, body, {
        ...options,
        withCredentials: true,
      });
      return res.data;
    },
  });

  return { data, mutate, fetchError, isError, isSuccess, isPending };
}

// DELETE method
export function useDelete(uri: string, options?: AxiosRequestConfig) {
  const {
    data,
    mutate,
    error: fetchError,
    isError,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: [uri],
    mutationFn: async (id) => {
      const res = await axios.delete(`${baseUrl}/${uri}/${id}`, {
        ...options,
        withCredentials: true,
      });
      return res.data;
    },
  });

  return { data, mutate, fetchError, isError, isSuccess, isPending };
}
