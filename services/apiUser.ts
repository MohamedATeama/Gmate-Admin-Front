import api from "@/api/axios";

export const getAllUsers = async ({
  page,
  limit,
  search,
  role,
  active,
}: {
  page: number;
  limit: number;
  search?: string;
  role?: string;
  active?: string;
}) => {
  try {
    const response = await api.get(`/users`, {
      params: {
        page,
        limit,
        search,
        role,
        active,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Get all users failed:", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete user failed:", error);
    throw error;
  }
};

export const updateUser = async (id: string, data: any) => {
  try {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Update user failed:", error);
    throw error;
  }
};

export const createUser = async (data: any) => {
  try {
    const response = await api.post(`/users`, data);
    return response.data;
  } catch (error) {
    console.error("Create user failed:", error);
    throw error;
  }
};

export const changeActive = async (id: string) => {
  try {
    const response = await api.put(`/auth/changeActive/${id}`);
    return response.data;
  } catch (error) {
    console.error("Change active failed:", error);
    throw error;
  }
};