export const selectUser = (state) => state.user;

export const selectUserById = (state, { userId }) => selectUser(state).entities[userId];

export const selectUserIds = (state) => selectUser(state).ids;
