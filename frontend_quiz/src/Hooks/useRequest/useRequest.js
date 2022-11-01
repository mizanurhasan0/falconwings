import axios from "axios";

const useRequest = () => {
  return function ({ url, method, data }) {
    return axios({
      method: method || "get",
      url: `${process.env.REACT_APP_API_URL}/${url}`,
      data: data ? data : "",
    });
  };
};

export default useRequest;
