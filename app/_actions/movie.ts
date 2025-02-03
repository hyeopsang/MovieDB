import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const BASE_URL= 'https://api.themoviedb.org/3/';
export const now_playing = (page: number) => {
    axios({
    method: 'GET',
    url: `${BASE_URL}movie/now_playing?language=ko&page=${page}&region=KR`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJhYjZjZGVlZDk5OTc4NTdkNjhiYzFlZTk3YTlhZiIsIm5iZiI6MTcwNTM2NDI4NS45MTYsInN1YiI6IjY1YTVjYjNkMDNmMGI2MDBjNmQ1YzViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7n-H-rdk-3Ebyqzr___JE8uBteE5od49JwZskLHWIJs'
    }
    })
}
export const upcomming = (page: number) => {
    axios({
    method: 'GET',
    url: `${BASE_URL}movie/upcoming?language=ko&page=${page}&region=KR`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJhYjZjZGVlZDk5OTc4NTdkNjhiYzFlZTk3YTlhZiIsIm5iZiI6MTcwNTM2NDI4NS45MTYsInN1YiI6IjY1YTVjYjNkMDNmMGI2MDBjNmQ1YzViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7n-H-rdk-3Ebyqzr___JE8uBteE5od49JwZskLHWIJs'
    }
    })
}
