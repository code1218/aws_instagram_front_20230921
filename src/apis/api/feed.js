import instance from "../utils/instance"

export const uploadFeed = async (feedFormData) => {
    const option = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    return await instance.post(`/api/v1/feed`, feedFormData, option);
}