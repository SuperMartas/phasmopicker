export const ENTER_APP = 'ENTER_APP';
export const enterApp = (page, isOffline = false) => ({
  type: ENTER_APP,
  page,
  isOffline,
});

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});
