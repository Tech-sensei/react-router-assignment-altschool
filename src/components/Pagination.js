
// PAGINATION FUNCTION
const Paginate = (users) => {
  const USERS_PER_PAGE = 12;
  const PAGES = Math.ceil(users.length / USERS_PER_PAGE);

  const NEW_USERS = Array.from({ length: PAGES }, (_, index) => {
    const START = index * USERS_PER_PAGE;
    return users.slice(START, START + USERS_PER_PAGE);
  });

  return NEW_USERS;
};

export default Paginate;
