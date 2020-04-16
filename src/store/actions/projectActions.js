export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // 데이터베이스 비동기 호출 로직 구현
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Myungho',
        authorLastName: 'Bae',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project: project });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
