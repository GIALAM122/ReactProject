import axios from "axios";
import { loadData, loadDataErr, loading } from "./todoSlice";
export function getData() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      let res = await axios.get(
        "https://669b08ca276e45187d347e19.mockapi.io/api/glreact/TodoList"
      );
      let data = res.data;
      dispatch(loadData(data));
      dispatch(loadDataErr(""));
    } catch (error) {
      dispatch(loadDataErr(error.message));
    } finally {
      dispatch(loading(false));
    }
  };
}