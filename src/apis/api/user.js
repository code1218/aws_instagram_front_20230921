import instance from "../utils/instance"

export const getUser = async (userId) => {
    return await instance.get(`/api/v1/user/${userId}`);
}