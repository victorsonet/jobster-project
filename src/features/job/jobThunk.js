import customFetch from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = customFetch.post("/jobs", job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobID, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await customFetch.delete(`jobs/${jobID}`);
    thunkAPI.dispatch(getAllJobs());
    toast.success("Job deleted!");
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return unauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobID, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`jobs/${jobID}`, job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkAPI);
  }
};
