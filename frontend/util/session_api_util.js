export const login = user => (
  $.ajax({
    method: 'post',
    url: 'api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'post',
    url: `api/user`,
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: `delete`,
    url: `api/session`
  })
);

export const cart = user => (
  $.ajax({
    method: 'patch',
    url: `api/user`,
    data: { user }
  })
)