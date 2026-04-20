import { heroApi } from "../api/hero.api"

export const getHeroesByPageAction = async () => {
    const { data } = await heroApi.get('/');

    return data;
}