import {all, takeEvery, put, debounce} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {
  GET_BUILDINGS_REQUEST,
  GetBuildingsRequestAction,
  getBuildingsSuccesActionCreator,
  getBuildingsFailureActionCreator,
  POST_BUILD_REQUEST,
  PostBuildRequestAction,
  postBuildSuccesActionCreator,
  postBuildFailureActionCreator,
} from './building.actions'
import buildingService from '../../utility/services/buildingService'
import {BuildResponse} from '../../model/building/build.response'
import {BuildingResponse} from '../../model/building/building.response'

export function* buildingSaga() {
  yield all([watchGet(), watchPost()])
}

function* watchGet() {
  yield takeEvery(GET_BUILDINGS_REQUEST, getBuildingsActionWatcher)
}

function* watchPost() {
  yield takeEvery(POST_BUILD_REQUEST, postBuildActionWatcher)
}

function* getBuildingsActionWatcher(action: GetBuildingsRequestAction) {
  try {
    const response: AxiosResponse<BuildingResponse> = yield buildingService.getBuildings()
    yield put(getBuildingsSuccesActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getBuildingsFailureActionCreator(errorMessage))
  }
}

function* postBuildActionWatcher(action: PostBuildRequestAction) {
  try {
    const response: AxiosResponse<BuildResponse> = yield buildingService.postBuild(
      action.building,
    )
    yield put(postBuildSuccesActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(postBuildFailureActionCreator(errorMessage))
  }
}
