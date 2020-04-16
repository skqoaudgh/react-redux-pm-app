export const createProject = (project) => {
  return (dispatch, getState) => {
    // 데이터베이스 비동기 호출 로직 구현

    dispatch({ type: 'CREATE_PROJECT', project: project });
  };
};
